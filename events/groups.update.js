// Event Handler: groups.update
// Description: This event is triggered when the metadata of a group is updated.

module.exports = {
  eventName: "groups.update",
  /**
   * Handles the groups.update event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'groups.update'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};