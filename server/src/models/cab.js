const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema(
    {
        size: {
            type: Number,
            default: 1,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Passenger"
        },
        passengers: [
            {
                type: String,
                trim: true,
                required: false
            },
        ],   
    }, {
        timestamps: true
    }
)

cabSchema.pre('save', async function(next) {
    const cab = this

    await cab.populate('createdBy').execPopulate();
    await cab.createdBy.populate('passenger').execPopulate();
    cab.passengers.push(cab.createdBy.passenger.name);

    next();
})

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;
