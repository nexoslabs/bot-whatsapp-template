
/**
 * Responds with "Pong!" and measures the bot's response time.
 * Usage: !ping
 */
module.exports = {
  name: "ping",
  description: "Check if the bot is alive and measure response time.",
  /**
   * Sends a ping message and response time.
   * @param {object} sock - WhatsApp socket instance
   * @param {string} from - Sender JID
   * @param {Array} args - Command arguments
   */
  async execute(sock, from, args) {
    const start = Date.now();
    // Send initial message and save the returned message object
    const sentMsg = await sock.sendMessage(from, { text: "Pong! 🏓" });
    const latency = Date.now() - start;
    // Fallback: send as a new message if editing is not supported
    await sock.sendMessage(from, { text: `Pong! 🏓\nResponse time: ${latency}ms` });
  }
};