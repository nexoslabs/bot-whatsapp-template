
/**
 * Lists all available commands and their descriptions.
 * Usage: !help
 */
const helpText = `
Available commands:
!hi    - Say hello
!time  - Show current time
!image - Send an image
!poll  - Create a poll
!ping  - Check bot response time
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