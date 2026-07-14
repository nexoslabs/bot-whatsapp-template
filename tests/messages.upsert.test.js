const test = require('node:test');
const assert = require('node:assert/strict');

const messageHandler = require('../events/messages.upsert');

test('unknown commands respond with a helpful message', async () => {
  let sentMessage = null;
  const sock = {
    sendMessage: async (_from, message) => {
      sentMessage = message;
    },
  };

  const logger = {
    info() {},
    error() {},
  };

  const handle = messageHandler.handler(sock, logger, new Map());

  await handle({
    messages: [
      {
        key: { remoteJid: 'user@s.whatsapp.net', fromMe: false },
        message: { conversation: '>unknown' },
      },
    ],
  });

  assert.equal(sentMessage.text, 'Unknown command. Type >help to see available commands.');
});
