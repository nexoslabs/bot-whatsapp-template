
/**
 * Returns the current server time in a user-friendly format.
 * Usage: !time
 */
module.exports = {
  name: "time",
  description: "Get the current server time.",
  /**
   * Sends the current server time to the user.
   * @param {object} sock - WhatsApp socket instance
   * @param {string} from - Sender JID
   * @param {Array} args - Command arguments
   */
  execute: async (sock, from, args) => {
    const now = new Date().toLocaleString();
    await sock.sendMessage(from, { text: `Current server time: ${now}` });
  }
};