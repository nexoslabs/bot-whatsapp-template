// commands.js
module.exports = {
  hi: async (sock, from) => {
    await sock.sendMessage(from, { text: "Hello!" });
  },
  time: async (sock, from) => {
    await sock.sendMessage(from, {
      text: `Server time: ${new Date().toLocaleString()}`,
    });
  },
  image: async (sock, from) => {
    await sock.sendMessage(from, {
      image: { url: "https://www.nexoscreator.tech/logo.png" },
      caption: "Here is an image!",
    });
  },
  help: async (sock, from) => {
    await sock.sendMessage(from, {
      text: "Available commands:\n>hi\n>help\n>time\n>image",
    });
  },
};
