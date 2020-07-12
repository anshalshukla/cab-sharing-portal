const Cab = require("../../models/cab");
const mongoose = require("mongoose");

const resolver = {
    Mutation: {
        async createCab(_, args, context) {
            const start = new Date(args.start);
            const end = new Date(args.end);
            const cabs = await Cab.find({
                    to: args.to,
                    from: args.from,
                    isCompleted: false,
                    size: { $lte: 4 - args.size },
                    $or: [
                        {
                            $and: [
                                { start: { $gte: start}},
                                { start: { $lt: end}}
                            ]
                        },
                        {
                            $and: [
                                { end: { $gt: start}},
                                { end: { $lte: end}}
                            ]
                        }
                    ]
            });

            const current = new Date();
            let waitList = [];

            cabs.forEach((item) => {
                let node = item.assignPriority(args.size, start, end, current);
                if (node != null) {
                    waitList.push(node);
                }
            });

            if (waitList.length == 0) {
                const cab = new Cab({
                                    "size": args.size,
                                    "from": args.from,
                                    "to": args.to,
                                    "start": start,
                                    "end": end,
                                    });

                cab.passengers.push(mongoose.Types.ObjectId(context.user._id));

                await cab.save();
                
                const logged_user = await context.user;
                logged_user.cabs.push(mongoose.Types.ObjectId(cab._id));

                await logged_user.save();
                return cab;
            }

            waitList = waitList.sort((a, b) => (a.priority < b.priority) ? 1 : (a.priority > b.priority) ? -1 : 0);

            const pair = await waitList[0];
            let cab = await Cab.findById(pair.id);
            const logged_user = await context.user;
            cab = await cab.merge(logged_user._id, args.size, start, end);

            // const cab = waitList[0].merge(context.user._id, args.size, start, end);
            waitList.forEach((item) => { delete item });

            logged_user.cabs.push(mongoose.Types.ObjectId(cab._id));
            await logged_user.save();

            await cab.populate('passengers').execPopulate();
            
            return cab;
            
        }
    }
};

module.exports = resolver;