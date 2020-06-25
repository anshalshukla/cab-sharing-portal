const { GraphQLDateTime} = require('graphql-iso-date');
const mongoose = require("mongoose");
const Passenger = require("../../models/passenger");

const resolver = {
    DateTime : GraphQLDateTime,

    Query: {
        async all_passengers(_, args) {
            passengers = await Passenger.find({});
            return passengers;
        },
        async passenger(_, args) {
            passenger = await Passenger.findById(args_id);
            return passenger;
        }
    },

    Mutation: {
        async createPassenger(_, args) {
            const date = new Date(args.travelDetails);
            // const user_id = mongoose.Types.ObjectId(args.user_id);
            const passenger = new Passenger({
                passenger: args.user_id,
                travelDetails: date,
                from: args.from,
                to: args.to
            });

            await passenger.save();
            return passenger;
        }
    }
}

module.exports = resolver;
