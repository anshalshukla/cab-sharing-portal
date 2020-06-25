const { GraphQLDateTime} = require('graphql-iso-date');
const Passenger = require("../../models/passenger");

const resolver = {
    DateTime : GraphQLDateTime,

    Mutation: {
        async createPassenger(_, args) {
            const passenger = new Passenger({
                
            })
        }
    }
}

module.exports = resolver;
