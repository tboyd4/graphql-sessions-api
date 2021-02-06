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
  },
};
