const express = require("express");
const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const {ApolloServer, gql} = require("apollo-server-express");
const dotEnv = require("dotenv");

dotEnv.config();

// Initialize Database connection
require("./db/mongoose");

const buildDataloaders = require("./graphql/dataloaders");

const User = require("./models/user");

const auth = require("./middleware/auth");

const googleLoginRouter = require("./oAuth2/authRouters");

const app = express();

// Setup Admin Panel
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
  resources: [User],
  rootPath: "/admin",
});
const router = AdminBroExpressjs.buildRouter(adminBro);

// Log requests to terminal
const loggerMiddleware = (req, res, next) => {
    console.log(req.method + " " + req.path);
    next();
}

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

app.use(express.json());
app.use(loggerMiddleware);
app.use(auth);
app.use(googleLoginRouter);


server.graphqlPath = "/data";
server.applyMiddleware({ app });
module.exports = app;