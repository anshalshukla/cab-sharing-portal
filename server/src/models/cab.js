const mongoose = require("mongoose");

class Node {
    constructor(id, priority, startTime, endTime) {
        this.id = id;
        this.priority = priority;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

const validLocations = ['IGI', 'PIL', 'LOH', 'NDL', 'JAI'];

const cabSchema = new mongoose.Schema(
    {
        size: {
            type: Number,
            default: 1,
            required: true
        },
        passengers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        ],
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
        from: {
            type: String,
            enum: validLocations,
            required: true,
        },
        to: {
            type: String,
            enum: validLocations,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false,
        }
    }, {
        timestamps: true
    }
)

cabSchema.pre('save', async function(next) {
    const cab = this;

    if (cab.from === cab.to) {
        throw new Error("TO and FROM locations are same.");
    }

    if (cab.start > cab.end) {
        throw new Error("Start is greater than the end.");
    }

    if (cab.size == 4) {
        cab.isCompleted = true;
    }

    next();
})

cabSchema.methods.merge = async function(user_id, size, start, end) {
    const cab = this;
    cab.start = start;
    cab.end = end;
    cab.passengers.push(mongoose.Types.ObjectId(user_id));
    cab.size += size;
    if (cab.size === 4) {
        cab.isCompleted = true;
    }

    await cab.save();

    return cab;
}

// logic for assigning priority wrt to a cab.size -int, start, end, current - datetime objects.
cabSchema.methods.assignPriority = async function(size, start, end, current) {
    const cab = this;

    if (cab.size + size > 4) {
        return null;
    }

    let i;
    let size_factor = 1;
    for (i = 0; i < cab.size + size; i++) {
        size_factor *= 7; // weight for group size
    }

    const startTime = (cab.start < start) ? start : cab.start;
    const endTime = (cab.end < end) ? cab.end : end;

    let intersection_factor = (endTime - startTime)/1000; // intersection in seconds.
    intersection_factor = intersection_factor / 40; // weight for intersection.

    //factor for first-come-first-serve as diff of registration time
    let reg_factor = (cab.createdAt - current)/1000; // difference in seconds.
    reg_factor = reg_factor / 360;

    const priority = size_factor + intersection_factor + reg_factor;
    const node = new Node(cab._id, priority, startTime, endTime);
    return node;    
}

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;
