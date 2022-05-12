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
    // user.populate
    //! make sure this actually works for teacher
    //!populate everything i need
    //checked 5/12 at 2:30 and both userId and user are defined and accurate
    return res.status(200).json({user});
    //!user might need to be in an object
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error in getUserAuth");
  }
};

module.exports = { getUserAuth };
