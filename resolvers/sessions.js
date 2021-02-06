const _ = require("lodash");

module.exports = resolvers = {
  // Any queries that we want to be able to run will need a resolver
  // These will have a list of arguments, one of which is the datasource
  // These should return data from the datasource
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
    speakers: (parent, args, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakers(args);
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakerById(id);
    },
  },
  // we are going to document this better. This was the last thing you did
  Session: {
    async speakers(session, args, { dataSources }) {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });

      return returns;
    },
  },
};
