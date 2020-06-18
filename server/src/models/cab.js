const mongoose = require("mongoose");

const validLocations = ['IGI', 'PIL', 'LOH', 'NDL', 'JAI'];

const getTodayDate = () => {
    const datetime = new Date();
    const todayDate = datetime.toISOString().slice(0,10);

    return todayDate;
}

const cabSchema = new mongoose.Schema(
    {
        passengers: [
            {
                passenger: {
                    type: String,
                    required: true,
                },
            },
        ],

        primaryPassenger: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },

        contact: {
            type: Number,
            required: true,
            validate: {
                validator: function(v) {
                    return /d{10}/.test(v);
                },
                message: '{VALUE} is not a valid 10 digit number!'
            }
        },

        to: {
            type: String,
            enum: validLocations,
            required: true
        },

        from: {
            type: String,
            enum: validLocations,
            required: true
        },

        travelDetails: {
            type: Date,
            required: true,
            min: getTodayDate()
        }
    }
)

cabSchema.pre("save", function (next) {
    const cab = this;
    if (cab.from === cab.to) {
        throw new Error("TO and FROM locations are same");
    }

    cab.passengers.push(cab.primaryPassenger.name);

    next();
})

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;
