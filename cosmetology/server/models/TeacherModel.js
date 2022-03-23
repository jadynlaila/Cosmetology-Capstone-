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
      default: 1234
    //!we realized that since we have the teacher models and student models separate, we have no (quick) way to check that all pins are unique,
    //!meaning that students and teachers could potentially have the same pin
    //!so we figured we could give the teachers a default pin which could double as the code they need to enter on signup 
    //! second session if u think this is stupid and dumb tell us please
  }
});

module.exports = mongoose.model("Teacher", TeacherSchema);
