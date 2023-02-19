const StylistModel = require("../models/StylistModel");
const TeacherModel = require("../models/TeacherModel");

const getUserAuth = async (req, res) => {
  const { userId } = req;
  // if (!id) return res.status(500).send("No User Found");

  try {
    let user = await StylistModel.findById(userId);
    if (!user) {
      user = await TeacherModel.findById(userId);
    }
    //!need to populate user
    //! make sure this actually works for teacher
    return res.status(200).json({ user });
    //!user might need to be in an object
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error in getUserAuth");
  }
};

module.exports = { getUserAuth };
