const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  // stylist: { type: Schema.Types.ObjectId, ref: "Stylist" },
  stylist: { type: String},
  preferredStylist: { type: String },
  date: {
    type: Date,
    value: Date,
    required: true,
  },
//   time: {
//     type: Date,
//     required: true,
//   },
  style: {
    type: String,
  },
  notes: {
    type: String,
  },
  duration: {
    // we calculate this by subtracting check out from check in
    },
  checkIn: {
    type: Date,
  },
  checkOut: {
    type: Date,
  },
  location: {
    type: String,
    default: "upcoming",
    enum: ["upcoming", "active", "completed"],
  },
});

module.exports = mongoose.model("Visit", VisitSchema);
