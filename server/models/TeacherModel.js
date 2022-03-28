const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  students: { type: Schema.Types.ObjectId, ref: "Stylist" },
  name: {
      type: String,
      required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  },
  pin: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model("Teacher", TeacherSchema);
