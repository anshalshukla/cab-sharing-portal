const {ApolloServer} = require("apollo-server");
const dotEnv = require("dotenv");

dotEnv.config();

// Initialize Database connection
require("./db/mongoose");

const buildDataloaders = require("./graphql/dataloaders");

const User = require("./models/user");
const Cab = require("./models/cab.js");
const Passenger = require("./models/passenger.js")

// For GraphQL
const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ req, connection }) => {
      const contextObj = {};
      if (req) {
        contextObj.user = req.user;
        contextObj.authenticated = req.authenticated;
      }
      contextObj.dataloaders = buildDataloaders();
      return contextObj;
    },
});

server.graphqlPath = "/graphql";

module.exports = server;