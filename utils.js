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

module.exports = config;
