// Event Handler: contacts.upsert
// Description: This event is triggered whenever a contact is added or updated.

module.exports = {
  eventName: "contacts.upsert",
  /**
   * Handles the contacts.upsert event.
   * @param {object} sock - The WhatsApp socket instance.
   * @param {object} logger - Logger for logging info and errors.
   * @returns {Function}
   */
  handler: (sock, logger) => async (eventData) => {
    logger.info(`[${'contacts.upsert'}] Event triggered:`, eventData);
    // TODO: Implement your logic here.
  }
};