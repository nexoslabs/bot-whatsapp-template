[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat-square&color=cyan)](https://nodejs.org/)
[![GitHub code](https://img.shields.io/github/languages/code-size/nexoslabs/bot-whatsapp-template.svg?logo=github&style=flat-square&color=cyan)](https://github.com/nexoslabs/bot-whatsapp-template)
[![GitHub stars](https://img.shields.io/github/stars/nexoslabs/bot-whatsapp-template.svg?logo=github&style=flat-square&color=cyan)](https://github.com/nexoslabs/bot-whatsapp-template)
[![GitHub issues](https://img.shields.io/github/issues/nexoslabs/bot-whatsapp-template?logo=github&style=flat-square&color=cyan)](https://github.com/nexoslabs/bot-whatsapp-template/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?logo=github&style=flat-square&color=cyan)](./LICENSE)

# WhatsApp Bot (Baileys) 🤖

This is a simple and powerful WhatsApp bot built using the [Baileys](https://github.com/WhiskeySockets/Baileys) library, an unofficial WhatsApp Web API for Node.js. It allows you to automate replies, handle user messages, and create intelligent bot logic.

> ⚠️ **Disclaimer:** This bot uses an **unofficial API**. It may violate WhatsApp’s Terms of Service and is not recommended for production or commercial use. Use at your own risk.

---

## ✨ Features

- 📱 Connects to WhatsApp Web using QR Code
- ✨ Automatically replies to messages (customizable)
- 🧠 Simple logic engine (keyword-based)
- 📤 Send text, images, media, polls
- 🔄 Auto reconnect on disconnect

---

## 📦 Requirements

- Node.js v18 or later
- WhatsApp account (not banned)
- Terminal/Command prompt

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/nexoslabs/bot-whatsapp-template.git
cd bot-whatsapp-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the bot

```bash
npm start
```

### 4. Scan the QR code

Open WhatsApp on your phone → Menu → Linked Devices → Scan QR code from terminal.

---

## 💬 Bot Logic

Right now, the bot handles the following:

* If the user sends `"!hi"` or `"!Hi"`, it replies with:

  > Hello! 👋 I am your bot.

You can modify and extend this behavior in `index.js` or commands dir.

---

## ☁️ Deployment

You can deploy your bot on platforms like:

* [Railway](https://railway.app)
* [Render](https://render.com)
* \[VPS (DigitalOcean, AWS, etc.)]

---

## ⚠️ Disclaimer

This bot uses an unofficial WhatsApp API via Web scraping (like WhatsApp Web). Your number may be banned if used incorrectly. Do **NOT** use this bot for:

* Bulk messaging
* Spamming
* Commercial purposes

---

## 🤝 Contributing

We ❤️ contributions! Follow these steps to contribute:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a new branch (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 **Open a Pull Request**

📖 _See our [Contribution Guidelines](CONTRIBUTING.md) for more details._

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact & Community

💬 Join us on **Discord**: [Click Here](https://discord.gg/H7pVc9aUK2)  
🐦 **Follow on Twitter**: [@nexoslabs](https://twitter.com/nexoslabs)  
📧 **Email**: [contact@nexoscreation.tech](mailto:contact@nexoscreation.tech)

If you find this project helpful, please consider **starring ⭐ the repository** or **sponsoring 💖 on GitHub**!

<p align="center">
  Created with ❤️ by <a href="https://github.com/nexoslabs">@nexoslabs</a>
</p>
