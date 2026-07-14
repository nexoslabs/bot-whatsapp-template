// Event Handler: messages.upsert
// Description: Handles incoming messages (real-time and offline sync), parses commands, and executes them if matched.
// Triggers when a new message is received in the chat.

const config = require("./../utils");
const prefix = config.bot?.prefix || "!";

module.exports = {
  eventName: "messages.upsert",
  /**
   * Handles new incoming messages and executes commands.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @param {Map} commands - Map of available commands.
   * @returns {Function}
   */
  handler: (sock, logger, commands) => async ({ messages }) => {
    try {
      const msg = messages[0];
      if (!msg?.message || msg.key.fromMe) return;

      const from = msg.key.remoteJid;
      const text =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text ||
        msg.message.imageMessage?.caption ||
        msg.message.videoMessage?.caption;

      if (!text || !text.startsWith(prefix)) return;
      
      logger.info("Received command", { from, text });
      const [cmdName, ...args] = text.slice(prefix.length).trim().split(" ");
      const command = commands.get(cmdName.toLowerCase());

      if (!command) {
        await sock.sendMessage(from, {
          text: `Unknown command. Type ${prefix}help to see available commands.`,
        });
        logger.warn("Unknown command received", { from, cmdName });
        return;
      }

      await command.execute(sock, from, args);
      logger.info("Command executed", { cmdName, from });
    } catch (err) {
      logger.error("Command handling failed", { error: err.message, stack: err.stack });
    }
  }
};
