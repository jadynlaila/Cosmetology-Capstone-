const StylistModel = require("../models/StylistModel");
const TeacherModel = require("../models/TeacherModel");

const getUserAuth = async (req, res) => {
  const { userId } = req;
  console.log(`userid getuserauth`, userId)
  //works correctly as of 5/16 1:50 when routed to http://localhost:3000/6261ec2489762450a9d52f6a
  if (!userId) return res.status(500).send("No User Found");

  try {
    let user = await StylistModel.findById(userId);
    if (!user) {
      user = await TeacherModel.findById(userId);
    }
    // user.populate
    console.log('getuserauth user', user)
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
