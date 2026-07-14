/**
 * Utility functions for WhatsApp bot
 * Add helpers here for config, formatting, validation, etc.
 */
const fs = require("fs");
const yaml = require("js-yaml");

let config = {};
try {
  const file = fs.readFileSync("./bot.yml", "utf8");
  config = yaml.load(file);
} catch (e) {
  console.error("⚠️ Failed to load bot.yml:", e);
}

function createLogger(baseLogger) {
  return {
    info: (message, meta) => baseLogger.info({ meta }, message),
    warn: (message, meta) => baseLogger.warn({ meta }, message),
    error: (message, meta) => baseLogger.error({ meta }, message),
    debug: (message, meta) => baseLogger.debug({ meta }, message),
  };
}

async function withRetry(operation, options = {}) {
  const retries = options.retries ?? 3;
  const delayMs = options.delayMs ?? 500;
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt >= retries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError;
}

module.exports = {
  ...config,
  createLogger,
  withRetry,
};
