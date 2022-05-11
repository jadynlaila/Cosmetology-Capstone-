const StylistModel = require("../models/StylistModel");
const TeacherModel = require("../models/TeacherModel");

const getUserAuth = async (req, res) => {
  const { id } = req;
  if (!id) return res.status(500).send("No User Found");

  try {
    let user = await StylistModel.findById(id);
    if (!user) {
      user = await TeacherModel.findById(id);
    }
    // user.populate
    //! make sure this actually works for teacher
    //!populate everything i need
    return res.status(200).json(user);
    //!user might need to be in an object
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error in getUserAuth");
  }
};

module.exports = { getUserAuth };
