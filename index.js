// Imports ApolloServer core package
const { ApolloServer } = require("apollo-server");
// Imports our class that handles our session data, and will be what our resolver calls on
const SessionAPI = require("./datsasources/sessions");
// Imports Schema and Resolvers
const typeDefs = require("./schemas/sessions");
const resolvers = require("./resolvers/sessions");

// Creates a new instance of our SessionAPI class
const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

// Configures our sever, and passes in schemas, resolvers, and datasources
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

// Starts our ApolloServer
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
