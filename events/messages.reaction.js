// Event Handler: messages.reaction
// Description: This event is triggered when a reaction is added or removed from a message.

module.exports = {
  eventName: "messages.reaction",
  /**
   * Handles the messages.reaction event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'messages.reaction'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};