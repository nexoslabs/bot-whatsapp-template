// Event Handler: chats.delete
// Description: This event is triggered when a chat is deleted.

module.exports = {
  eventName: "chats.delete",
  /**
   * Handles the chats.delete event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'chats.delete'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};