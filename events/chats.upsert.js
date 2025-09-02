// Event Handler: chats.upsert
// Description: This event is triggered whenever a new chat is opened with you.

module.exports = {
  eventName: "chats.upsert",
  /**
   * Handles the chats.upsert event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'chats.upsert'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};