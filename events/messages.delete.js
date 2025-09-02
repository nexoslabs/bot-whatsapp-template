// Event Handler: messages.delete
// Description: This event is triggered when a message is deleted.

module.exports = {
  eventName: "messages.delete",
  /**
   * Handles the messages.delete event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'messages.delete'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};