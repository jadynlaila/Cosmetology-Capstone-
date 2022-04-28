const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");

const createVisit = async (req, res) => {
  const {
    preferredStylist: stylist,
    date,
    style,
    notes,
    clientId,
  } = req.body.newVisit;

  try {
    console.log(req.body.newVisit);
    const client = await ClientModel.findById(clientId);
    if (!client) {
      return res.status(404).send("client not found @createVisit");
    }
    console.log(`hi client ${client}`);

    const preferredStylist = await StylistModel.findOne({
      email: stylist,
    });

    //! map through client's visits and see if the time of this visit = the time of any of their past visits.
    //! if it does, the client cannot make a new visit at this time

    const visit = await new VisitModel({
      client,
      preferredStylist,
      date,
      style,
      notes,
    });
    visit.populate("client");
    visit.populate("preferredStylist");
    visit.save();

    //* not quite sure what to do with duration, checkin, and checkout yet because i think that has to be set later
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ createVisit");
  }
};

const getVisits = async (req, res) => {
  const visits = await VisitModel.find({});
  // .populate('client').populate('preferredStylist')
  res.status(200).json({ visits });
};

const getActiveVisits = async (req, res) => {
  try {
    const activeVisits = await VisitModel.find({ active: true }).populate(
      "client"
    );
    return res.status(200).json(activeVisits);
    8;
  } catch (error) {
    console.log(error);
    res.status(50).send("error @ getActiveVisits");
  }
};

const getUpcomingVisits = async (req, res) => {
  try {
    const upcomingVisits = await VisitModel.find({}).populate("client");
    upcomingVisits.map((visit) => {
      // console.log(visit);
    });
    res.status(200).json(upcomingVisits);
  } catch (error) {
    console.log(error);
    res.status(500).send("error @ getUpcomingVisits");
  }
};

const checkIn = async (req, res) => {
  const { visitInfo, pin } = req.body.checkInInfo;
  try {

    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const checkInTime = date + " " + time;
    const stylist = await StylistModel.findOne({ pin: pin });
    if (!stylist) {
      return res.status(404).send("stylist not found");
    }

    const visit = await VisitModel.findOne({
      _id: visitInfo._id
    });
    visit.checkIn = checkInTime
    console.log(`before active true ${visit}`)
    visit.active = true;
    await visit.save();
    console.log(`after active true ${visit}`)
    
    return res.status(200).json({visit});
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ checkIn");
  }
};

const checkOut = async (req, res) => {
  const { visitInfo, pin } = req.body.checkInInfo;
  try {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const checkOutTime = date + " " + time;
    const stylist = await StylistModel.findOne({ pin: pin });
    if (!stylist) {
      return res.status(404).send("stylist not found");
    }

    const visit = await VisitModel.findOneAndUpdate({
      id: visitInfo._id,
      checkOut: checkOutTime,
      active: true
    });
    
    
    
    console.log(stylist, visitInfo, checkOutTime);
    return res.status(200).json(visit);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ checkOut");
  }
};


module.exports = {
  createVisit,
  getVisits,
  getActiveVisits,
  checkIn,
  checkOut,
  getUpcomingVisits,
};
