// Event Handler: group-participants.update
// Description: This event is triggered when the participants of a group change or their ranks change.

module.exports = {
  eventName: "group-participants.update",
  /**
   * Handles the group-participants.update event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'group-participants.update'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};