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
    pattern: /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@west-mec.org/gm
  },
  pin: {
    type: String,
    unique: true,
    default: randomString = () => {
      const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

      const randyAry = Array.from(
        {length: 4},
        () => char[Math.floor(Math.random() * char.length)]
      )
      const string = randyAry.join("")
      return string
    }
},
});

module.exports = mongoose.model("Teacher", TeacherSchema);
