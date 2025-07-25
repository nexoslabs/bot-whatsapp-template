const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  delay,
} = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const pino = require("pino");
const qrcode = require("qrcode-terminal");
const commands = require("./commands");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth_info");

  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`Using Baileys v${version.join(".")}, Latest: ${isLatest}`);

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: false, // (deprecated)
    logger: pino({ level: 'silent' }),
    browser: ["NexosBot", "Chrome", "120.0.0.0"],
    generateHighQualityLinkPreview: true,
  });

  // Save login credentials on update
  sock.ev.on("creds.update", saveCreds);

  // Handle QR code and connection events
  sock.ev.on(
    "connection.update",
    async ({ connection, lastDisconnect, qr }) => {
      if (qr) {
        console.log("Scan the QR below to login:");
        qrcode.generate(qr, { small: true });
      }

      if (connection === "close") {
        const reasonCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
        const shouldReconnect = reasonCode !== DisconnectReason.loggedOut;
        console.log(
          "Connection closed.",
          reasonCode,
          "Reconnecting?",
          shouldReconnect
        );
        if (shouldReconnect) {
          await delay(3000);
          startBot();
        } else {
          console.log(
            "Logged out. Please delete auth_info and re-authenticate."
          );
        }
      } else if (connection === "open") {
        console.log("Connected to WhatsApp");
      }
    }
  );

  // Listen for incoming messages
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const text =
      msg.message.conversation || msg.message.extendedTextMessage?.text;

    console.log(`New message from ${from}: ${text}`);

    // Respond to user
    const cmd = text?.trim().replace(/^>/, "").toLowerCase();
    if (commands[cmd]) {
      await commands[cmd](sock, from);
    }
  });
}

startBot();
