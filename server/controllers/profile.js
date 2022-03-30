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
    const stylist = await StylistModel.findOne({stylist: stylist._id}).populate("stylist")
    if(!stylist) return res.status(404).send("Stylist not Found :|")

    const {
      name,
      clients,
      teacher,
      email,
      profilePicURL,
      s1hours,
      s2hours,
      s3hours,
      s4hours,
    } = stylist

    return res.status(200).json(stylist);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getProfileStylist");
  }
};
const getProfileTeacher = async (req, res) => {
  try {
    const teacher = await TeacherModel.findOne({teacher: teacher._id}).populate("teacher")
    if(!teacher) return res.status(404).send("Teacher not Found :|")

    const {
      students,
      name,
      email,
    } = teacher

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
  const { stylistId } = req.params;
  try {
    return res.status(200).json();
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
  const { teacherId } = req.params;
  try {
    return res.status(200).json();
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


module.exports = {getProfileStylist, getProfileTeacher}