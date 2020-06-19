const mongoose = require("mongoose");

const validLocations = ['IGI', 'PIL', 'LOH', 'NDL', 'JAI'];

const getTodayDate = () => {
    const datetime = new Date();
    const todayDate = datetime.toISOString().slice(0,10);

    return todayDate;
}

const passengerSchema = new mongoose.Schema({
        passenger: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        cab: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Cab"
        },
        travelDetails: {
            type: Date,
            required: true,
            min: getTodayDate()
        },
        from: {
            type: String,
            enum: validLocations,
            required: true
        },
        to: {
            type: String,
            enum: validLocations,
            required: true
        }
    }, {
        timestamps: true
    }
)

passengerSchema.pre("save", function (next) {
    const passenger = this;
    if (passenger.from === passenger.to) {
        throw new Error("TO and FROM loactions are same.");
    }

    next();
})

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
