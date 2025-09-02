// Event Handler: message-receipt.update
// Description: This event is triggered when the receipt of a message is updated (e.g., read, delivered).

module.exports = {
  eventName: "message-receipt.update",
  /**
   * Handles the message-receipt.update event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'message-receipt.update'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};