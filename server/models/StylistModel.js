const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StylistSchema = new Schema({
  name: {type: String, required: true},
  clients: { type: Schema.Types.ObjectId, ref: "Client" },
  teacher: { type: Schema.Types.String, ref: "Stylist" },
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
  profilePicURL: {type: String},
//* tracking hours per semester
  s1hours:{
      type: Number
  },
  s2hours: {
      type: Number
  },
  s3hours: {
      type: Number
  },
  s4hours: {
      type: Number
  }
});

module.exports =mongoose.models.Stylist || mongoose.model("Stylist", StylistSchema);
