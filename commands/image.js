
/**
 * Sends a predefined image with a caption to the chat.
 * Usage: !image
 */
module.exports = {
  name: "image",
  description: "Send an image.",
  /**
   * Sends an image to the user.
   * @param {object} sock - WhatsApp socket instance
   * @param {string} from - Sender JID
   * @param {Array} args - Command arguments
   */
  execute: async (sock, from, args) => {
    await sock.sendMessage(from, {
      image: { url: "https://www.nexoscreator.tech/logo.png" },
      caption: "Here is an image!",
    });
  },
};