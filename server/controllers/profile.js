const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
GET PROFILE
.put('/profile/:id')
req.params {id}

//! Two seperate getProfile as there are two differnt Models
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const getProfileStylist = async (req, res) => {
  try {
    console.log(req.query);
    const {id} = req.query;
    const stylist = await StylistModel.findOne({_id: id}).populate('visits');
    //! maybe populate stylist here
    console.log(`getprofilestylist ${getProfileStylist}`);
    if(!stylist) return res.status(404).send("Stylist not Found :|")
    return res.status(200).json(stylist)
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getProfileStylist");
  }
};

// const getProfile = async (req, res) => {
//   try {
//     const { username } = req.params;

//     const user = await UserModel.findOne({ username: username.toLowerCase() });
//     if (!user) {
//       return res.status(404).send("No User Found");
//     }

//     const profile = await ProfileModel.findOne({ user: user._id }).populate(
//       "user"
//     );

//     const profileFollowStats = await FollowerModel.findOne({ user: user._id });

//     return res.status(200).json({
//       profile,
//       followersLength:
//         profileFollowStats.followers.length > 0
//           ? profileFollowStats.followers.length
//           : 0,
//       followingLength:
//         profileFollowStats.following.length > 0
//           ? profileFollowStats.following.length
//           : 0,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Error at getProfile");
//   }
// };

const getProfileTeacher = async (req, res) => {
  try {
    const {id} = req.params;
    const teacher = await TeacherModel.findOne({_id: id})
    if(!teacher) return res.status(404).send("Teacher not Found :|")

    return res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getPRofileTeacher");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EDIT STYLIST
.put('/stylist/:stylistId')
req.params {stylistId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const updateStylist = async (req, res) => {
  const {
    body: {email, name, profilePicURL},
    params: {id}
  } = req;
  try {
    if(!email){
      return res.status(200).send("Please update Email or leave the same")
      
    }
    if(!name){
      return res.status(200).send("Please update Name or leave the same")
    }
    if(!profilePicURL){
      return res.status(200).send("Please update Profile Picture or leave the same")
    }

    const stylist = await StylistModel.findByIdAndUpdate(
      {_id: id},
      req.body,
      {new: true, runValidators: true}
    )
    if(!stylist){
      return res.status(200).send(`No stylist with id of ${id}`)
    }
    return res.status(200).json({stylist});
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ updateStylist");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EDIT CLIENT
.put('/client/:clientId')
req.params {clientId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const updateClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ updateClient");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EDIT TEACHER

we'll have a little edit button on the teacher profile where they can edit their basic information if needed
....or not because that seems a bit unnecessary

.post('/teacher')
req.params {teacherId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const updateTeacher = async (req, res) => {
  const {
    body: {email, name},
    params: {id}
  } = req;
  try {
    if(!email){
      return res.status(200).send("Please update Email or leave the same")
      
    }
    if(!name){
      return res.status(200).send("Please update Name or leave the same")
    }

    const teacher = await TeacherModel.findByIdAndUpdate(
      {_id: id},
      req.body,
      {new: true, runValidators: true}
    )
    if(!teacher){
      return res.status(200).send(`No Teacher with id of ${id}`)
    }
    return res.status(200).json({teacher});
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error @ updateTeacher");
  }
};


const updateProfile = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error at updateProfile");
  }
};
const updatePassword = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error at updatePassword");
  }
};

const deleteStylist = async(req,res) => {
  try {
    const {teacherId} = req;
    const {stylistId} = req.params;

    const stylist = await StylistModel.findById(stylistId)
    if(!stylist) return res.status(404).send("Stylist not Found")

    const teacher = await TeacherModel.findById(teacherId)
    if(stylist.user !== teacherId){
      if(stylist.role === "root"){
        await stylist.remove()
        return res.status(200).send("Stylist Deleted")
      }else {
        return res.status(401).send("Unauthorize")
      }
    }

    await stylist.remove()
    return res.status(200).send("Stylist Deleted")
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error in deleteStylist")
  }
}


module.exports = {getProfileStylist, getProfileTeacher, updateStylist, updateTeacher, deleteStylist}