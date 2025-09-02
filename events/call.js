// Event Handler: call
// Description: This event is triggered for various call actions such as accept, decline, offer, and timeout.

module.exports = {
  eventName: "call",
  /**
   * Handles the call event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'call'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};