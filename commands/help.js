
/**
 * Lists all available commands and their descriptions.
 * Usage: !help
 */
const config = require("./../utils");
const prefix = config.bot?.prefix || "!";
const helpText = `
Available commands:
${prefix}hi    - Say hello
${prefix}time  - Show current time
${prefix}image - Send an image
${prefix}poll  - Create a poll
${prefix}ping  - Check bot response time
`;

module.exports = {
  name: "help",
  description: "List available commands.",
  /**
   * Sends a help message listing all commands.
   * @param {object} sock - WhatsApp socket instance
   * @param {string} from - Sender JID
   * @param {Array} args - Command arguments
   */
  execute: async (sock, from, args) => {
    await sock.sendMessage(from, {
      text: helpText,
    });
  }
};