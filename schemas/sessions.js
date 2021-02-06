const { gql } = require("apollo-server");

// The schema, or type definitions object, should type out any sorts of data needed, including the queries, structures, and other objects needed
module.exports = typeDefs = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }
  type Speaker {
    id: ID!
    bio: String
    name: String!
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "because I said")
    level: String
    speakers: [Speaker]
  }
`;
