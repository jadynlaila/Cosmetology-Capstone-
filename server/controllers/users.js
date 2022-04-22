const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");


const defaultProfilePic = require("../util/defaultPic");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const isEmail = require("validator/lib/isEmail");
const validatorPhone = require("validator/lib/isMobilePhone");
const isAddress = /\d+\w+\s\w+\s\w+/;

const getPinValid = async (req, res) => {
  const { pin } = req.params;
  try {
    const teacherPins = TeacherModel.find({ pin: pin });
    const stylistPins = StylistModel.find({ pin: pin });

    if (stylistPins !== pin && teacherPins !== pin) {
      //pin is correct
    }

    const test = usernameRegex.test(username);
    if (!(test || usernameRegex.test(username))) {
      return res.status(401).send("Invalid username");
    }

    const user = await UserModel.findOne({
      username: username.toLowerCase(),
    });
    if (user) return res.status(401).send("Username already taken");

    return res.status(200).send("Available");
  } catch (error) {
    console.log(error);
    return res.status(500).send(`There was a server error`);
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A STYLIST

creating a new stylist. 
all the info in the req body is coming from the signup form
there should be a check *first thing* when the signup form is submitted
if there was no teacher code entered, *then* this will run

.post('/stylist')
req.body {clients, teacher, email, pin, s1hours, s2hours, s3hours, s4hours }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const createStylist = async (req, res) => {
  const {
    name,
    email,
    teacher,
    profilePicURL
  } = req.body;


  try {
    let stylist;
    stylist = await StylistModel.findOne({ email: email.toLowerCase() });
    if (stylist) return res.status(401).send("Email is already in use");

    stylist = new StylistModel({
      name,
      email: email.toLowerCase(),
      teacher,
      profilePicURL: profilePicURL || defaultProfilePic,
    })


    //! Didnt know what to do with the hours

    return res.status(200).json(stylist)

  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createStylist");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A NEW CLIENT

creating a new client. 
this will happen when a stylist submits the new client form
keep in mind that some of the advanced information may be missing so we need to account for null values 

.post('/client')
req.body = {name, email, address, phone, dob, hairCondition, scalpCondition, hairTexture, growthPatterns, hairDensity, hairPorosity, hairElasticity, hairLength}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const createClient = async (req, res) => {
  const {
    name,
    email,
    address,
    phone,
    dob,
    hairCondition,
    scalpCondition,
    hairTexture,
    growthPatterns,
    hairDensity,
    hairPorosity,
    hairElasticity,
    hairLength,
    allergies,
    medicalInfo,
    active
  } = req.body.newClient;

  // if(!isEmail(email)) return res.status(401).send("InValid")

  // if(!validatorPhone(phone)) return res.status(401).send("InValid")

  // if(!isAddress(address)) return res.status(401).send("InValid")
  try {
    console.log(dob);
    console.log(req.body);
    // let client = await ClientModel.find({ email: email.toLowerCase() });
    // if (client) return res.status(401).send("Email already in use");


    client = new ClientModel({
      name,
      email: email.toLowerCase(),
      address,
      phone,
      dob,
      hairCondition,
      scalpCondition,
      hairTexture,
      growthPatterns,
      hairDensity,
      hairPorosity,
      hairElasticity,
      hairLength,
      allergies,
      medicalInfo,
      active
    });

    client = await client.save();

    return res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createClient");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A NEW TEACHER

creating a new teacher
if a VALID teacher code was entered on signup, then this should run

.post('/teacher')
req.body = {name, email, pin, students}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const createTeacher = async (req, res) => {
  const { name, email } = req.body;

  try {
    let teacher;
    teacher = await TeacherModel.findOne({ email: email.toLowerCase() });
    if (teacher) return res.status(401).send("Email already in use");

    teacher = new TeacherModel({
      name,
      email: email.toLowerCase(),
    });

    return res.status(200).send("Account  Created")
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createTeacher");
  }
};

const loginStylist = async (req, res) => {
  const { pin } = req.body;
  if (!pin) return res.status(401).send("Invalid Pin")
  if (pin < 4) return res.status(401).send("Pin must be 4 char long")

  try {

    const stylist = await StylistModel.findOne({ pin: pin })
    if (stylist) {
      return res.status(200).send("Login")
    } else {
      return res.status(404).send("Stylist not Found")
    }

  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ loginStylist")
  }



}

const getStylist = async (req, res) => {
  try {
    const { teacher } = req.body;
    const stylists = await StylistModel.find({ teacher: teacher })
    res.status(200).json({ stylists })


  } catch (error) {
    console.log("Error @ getStylist", error);
  }

}

const getTeacher = async (req, res) => {
  try {
    const teacher = await TeacherModel.find({});
    res.status(200).json(teacher)
  } catch (error) {
    console.log("Error @ getTeacher", error);
  }
}


module.exports = {
  createStylist,
  createClient,
  createTeacher,
  loginStylist,
  getStylist,
  getTeacher
};


