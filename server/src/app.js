const {ApolloServer} = require("apollo-server");
const jwt = require("jsonwebtoken");

// Initialize Database connection
require("./db/mongoose");

const buildDataloaders = require("./graphql/dataloaders");

const User = require("./models/user");
const Cab = require("./models/cab.js");

// const cab1 = new Cab({
//     "size": 1,
//     "from": 'IGI',
//     "to": "PIL",
//     "start": "2020-07-15T09:26:49.326Z",
//     "end": "2020-07-15T13:35:49.326Z"
// });

// cab1.save();

// const cab2 = new Cab({
//   "size": 2,
//   "from": 'IGI',
//   "to": "PIL",
//   "start": "2020-07-15T10:26:49.326Z",
//   "end": "2020-07-15T11:35:49.326Z"
// });

// cab2.save();

// const cab3 = new Cab({
//   "size": 1,
//   "from": 'IGI',
//   "to": "PIL",
//   "start": "2020-07-15T13:26:49.326Z",
//   "end": "2020-07-15T16:35:49.326Z"
// });

// cab3.save();

// const cab4 = new Cab({
//   "size": 3,
//   "from": 'IGI',
//   "to": "PIL",
//   "start": "2020-07-15T09:26:49.326Z",
//   "end": "2020-07-15T11:35:49.326Z"
// });

// cab4.save();

// const cab5 = new Cab({
//   "size": 3,
//   "from": 'IGI',
//   "to": "PIL",
//   "start": "2020-07-15T12:26:49.326Z",
//   "end": "2020-07-15T13:35:49.326Z"
// });

// cab5.save();

// const cab6 = new Cab({
//   "size": 2,
//   "from": 'IGI',
//   "to": "PIL",
//   "start": "2020-07-15T09:26:49.326Z",
//   "end": "2020-07-15T13:35:49.326Z"
// });

// cab6.save();

const getUser = async(req) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "abcd1234");
    const user = await User.findOne({
        _id: decoded._id,
        "tokens.token": token,
    });
  
    if (!user) {
      throw new Error();
    }
  
    return user;
  } catch (e) {
    return null;
  }
}

// For GraphQL
const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    cors: true,
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ req, connection }) => {
      const contextObj = {};
      if (req) {
        contextObj.user = getUser(req);
        if (contextObj.user) {
          contextObj.authenticated = true;
        } else {
          contextObj.authenticated = false;
        }
      }
      contextObj.dataloaders = buildDataloaders();
      return contextObj;
    },
});

server.graphqlPath = "/graphql";

module.exports = server;