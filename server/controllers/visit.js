const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");

const createVisit = async (req, res) => {
  const {
    clientId,
    preferredStylistId,
    date,
    time,
    style,
    notes,
    duration,
    checkIn,
    checkOut,
  } = req.body;
  try {
    const client = await ClientModel.findOne({ client: clientId });
    const preferredStylist = await StylistModel.findOne({
      preferredStylist: preferredStylistId,
    });

    visit = new VisitModel({
      client,
      preferredStylist,
      date,
      time,
      style,
      notes,
    });
    //* not quite sure what to do with duration, checkin, and checkout yet because i think that has to be set later

    return res.status(200).json(visit);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ createVisit");
  }
};

const clientCheckIn = async (req, res) => {
  const { checkInTime, visitId, stylistPin } = req.body;
  //not 100% sure if this is gonna come from the reqbody or reqparams....

    try {
        const stylist = await StylistModel.findOne({pin: stylistPin});

        if(!stylist){
            return res.status(404).send('stylist not found');
            // we need to work this into the form that they can't submit the form unless the stylist pin given is valid... so i guess we have to do an auth 
        }
        const visit = await VisitModel.findOneAndUpdate({ id: visitId, checkIn: checkInTime });
        return res.status(200).json(visit)
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error @ clientCheckIn')
    }
};

const clientCheckOut = async (req, res) => {
    const {checkOutTime, visitId, stylistPin} = req.body;
    try {
        const stylist = await StylistModel.findOne({pin: stylistPin});
        //* need to calculate duration of visit
        const visit = await VisitModel.findOneAndUpdate({ id: visitId, checkOut: checkOutTime });
        return res.status(200).json(visit)
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error @ clientCheckIn')
    }
};

const getClientVisits = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await UserModel.findOne({ username: username.toLowerCase() });

    if (!user) {
      return res.status(404).send("User Not Found");
    }

    const posts = await PostModel.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("comments.user");

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error at getUserPosts");
  }
};

module.exports = { createVisit, clientCheckOut, clientCheckIn};

