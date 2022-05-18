const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");

const defaultProfilePic = require("../util/defaultPic");
const jwt = require("jsonwebtoken");

const validatorPhone = require("validator/lib/isMobilePhone");
const isAddress = /\d+\w+\s\w+\s\w+/;

const isEmail =
  /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@west-mec.org/gm;

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
  console.log(req.body);
  const { profilePicURL } = req.body;
  const { name, email, teacher } = req.body.stylist;

  // const test = isEmail.test(email);
  // if(!(test || isEmail.test(email))){
  //   return res.status(401).send("Invalid Email")
  // }

  try {
    let stylist;
    stylist = await StylistModel.findOne({ email: email });
    if (stylist) return res.status(401).send("Email is already in use");

    console.log(`teacher `, teacher);
    stylist = new StylistModel({
      name,
      email: email,
      teacher,
      profilePicURL: profilePicURL || defaultProfilePic,
    });
    const teacherFound = await TeacherModel.findOne({_id: teacher})
    console.log('teacher', teacherFound)

    const payload = { userId: stylist._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );


    stylist = await stylist.save();
    return res.status(200).json(stylist);
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
    active,
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
      active,
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
  console.log(req.body.teacher);
  const {
    teacherName: name,
    teacherEmail: email,
    pin,
    password,
  } = req.body.teacher;

  try {
    let teacher;
    teacher = await TeacherModel.findOne({ email: email.toLowerCase() });
    if (teacher) return res.status(401).send("Email already in use");

    if (pin !== "1109") {
      return res.status(401).send("Invalid Teacher Code");
    }

    teacher = new TeacherModel({
      name,
      email: email.toLowerCase(),
      password,
    });

    teacher = await teacher.save();

    console.log(`teacher created`, teacher)
    return res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createTeacher");
  }
};

const loginStylist = async (req, res) => {
  const { pin } = req.body.loginPin;
  console.log(`reqbodyloginpin ${req.body.loginPin}`);
  // if (!pin) return res.status(401).send("No pin entered")
  // if (pin.length < 4) return res.status(401).send("Pin must be 4 char long")

  try {
    //!need to make this work for teachers too
    const stylist = await StylistModel.findOne({ pin: pin });
    // populate stylsit here
    if (stylist) {
      console.log(stylist);
      const payload = { userId: stylist._id };
      console.log(payload);
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json(token);
        }
      );
    } else {
      console.log(pin);
      return res.status(404).send("Stylist not Found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ loginStylist");
  }
};

const getStylist = async (req, res) => {
  try {
    const { teacher } = req.body;
    const stylists = await StylistModel.find({ teacher: teacher });
    res.status(200).json({ stylists });
  } catch (error) {
    console.log("Error @ getStylist", error);
  }
};

const getTeacher = async (req, res) => {
  try {
    const teacher = await TeacherModel.find({});
    res.status(200).json(teacher);
  } catch (error) {
    console.log("Error @ getTeacher", error);
  }
};

const createHours = async (req, res) => {
  try {
    const { s1hours, s2hours, s3hours, s4hours } = req.body;

    const { userId } = req.params;

    const stylist = await StylistModel.findOne({ id: userId });

    const stylistHours = await StylistModel.updateMany({
      s1hours: s1hours,
      s2hours: s2hours,
      s3hours: s3hours,
      s4hours: s4hours,
    });

    res.status(200).json();
  } catch (error) {
    console.log("Error @ createHours");
  }
};

module.exports = {
  createStylist,
  createClient,
  createTeacher,
  loginStylist,
  getStylist,
  getTeacher,
  createHours,
};
