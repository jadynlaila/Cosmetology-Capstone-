const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: "Client" },
    preferredStylist: { type: Schema.Types.ObjectId, ref: "Stylist" },
    date: {
        type: Date
    },
    time: {
        type: Date
    },
    style: {
        type: String
    },
    notes: {
        type: String
    },
    duration:{
        // we calculate this by subtracting check out from check in 
    },
    checkIn: {
        type: Date
    },
    checkOut: { 
        type: Date
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Visit", VisitSchema);
