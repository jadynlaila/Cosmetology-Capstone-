const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StylistSchema = new Schema({
  name: { type: String, required: true },
  visits: [{ type: Schema.Types.ObjectId, ref: "Visit" }],
  clients: [{type: Schema.Types.ObjectId, ref: "Client"}],
  teacher: { type: Schema.Types.String, ref: "Stylist" },
  // when we're sorting the people by teacher, we may need to make this shcema.types.objectid
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
        { length: 4 },
        () => char[Math.floor(Math.random() * char.length)]
      )
      const string = randyAry.join("")
      return string
    }
  },
  profilePicURL: {  },
  //* tracking hours per semester
  s1hours: {
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

module.exports = mongoose.models.Stylist || mongoose.model("Stylist", StylistSchema);
