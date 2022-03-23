const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StylistSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: "Client" },
    stylist: { type: Schema.Types.ObjectId, ref: "Stylist" },
    date: {
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
    }
})

module.exports = mongoose.model("Stylist", StylistSchema);
