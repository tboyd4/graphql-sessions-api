// Imports the mock data. This could be replaced by an actual database
const sessions = require("../data/sessions.json");
// Imports the DataSource Super Class, which we will extend on
const { DataSource } = require("apollo-datasource");
// Imports lodash for our filtering
const _ = require("lodash");

// This class will bring in and manipulate our data (mock or database)
class SessionAPI extends DataSource {
  // The constructor and the initialize methods are needed
  constructor() {
    super();
  }

  initialize(config) {}

  // These are essentially "services" and will take in arguments, and then grab data from whatever datasource we are using
  // It will then return that to the resolver
  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }
}

module.exports = SessionAPI;
