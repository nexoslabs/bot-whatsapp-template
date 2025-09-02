// Event Handler: connection.update
// Description: Handles WhatsApp connection updates, QR code display, and reconnection logic.
// Triggers on connection state changes (open, close, QR required).

const QRCode = require("qrcode");
const { Boom } = require("@hapi/boom");
const { DisconnectReason, delay } = require("@whiskeysockets/baileys");

module.exports = {
  eventName: "connection.update",
  /**
   * Handles connection state changes, QR code display, and reconnection.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @param {Function} saveCreds - Function to save credentials.
   * @param {Function} startBot - Function to restart the bot if needed.
   * @returns {Function}
   */
  handler: (sock, logger, saveCreds, startBot) => async ({ connection, lastDisconnect, qr }) => {
    if (qr) {
      logger.info("Scan the QR below to login:");
      console.info(await QRCode.toString(qr, { type: "terminal", small: true }));
    }
    if (connection === "close") {
      const reasonCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = reasonCode !== DisconnectReason.loggedOut;
      logger.warn(`Connection closed. Code: ${reasonCode}. Reconnecting? ${shouldReconnect}`);
      if (shouldReconnect) {
        await delay(3000);
        startBot();
      } else {
        logger.error("Logged out. Please delete auth_info and re-authenticate.");
      }
    } else if (connection === "open") {
      logger.info("Connected to WhatsApp");
      // Send a message to the bot's (self-DM)
      try {
        const selfId = sock.user?.id || sock.user?.jid || sock.user;
        if (selfId) {
          await sock.sendMessage(selfId, { text: `*Thank you for Using Nexos Bot!* \n\n - *Official Discord Server:* https://discord.com/invite/A3euTAVqHv \n - *Server Time:* ${new Date().toLocaleString()} \n\n We ❤️ contributions!` });
        } else {
          logger.warn("Could not determine bot's own WhatsApp ID for self-DM.");
        }
      } catch (err) {
        logger.error("Failed to send self-DM:", err);
      }
    }
  }
};
