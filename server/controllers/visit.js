const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");

const createVisit = async (req, res) => {
  const { preferredStylist, date, style, notes, clientId} = req.body.newVisit;

  try {
    const client = await ClientModel.findOne({ client: clientId });

    const stylist = await StylistModel.findOne({
      email: preferredStylist
    });

    //! map through client's visits and see if the time of this visit = the time of any of their past visits.
    //! if it does, the client cannot make a new visit at this time
    console.log(client, stylist)

    const visit = await new VisitModel ({
      client,
      stylist,
      date,
      style,
      notes,
    })
    .populate('client')
    visit.save();


    
    console.log(visit);

    //* not quite sure what to do with duration, checkin, and checkout yet because i think that has to be set later
    return res.status(200).json(visit);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ createVisit");
  }
};

const getVisits = async (req, res) => {
  const visits = await VisitModel.find({});
  res.status(200).json({ visits });
}

const getActiveVisits = async (req, res) => {
  try {
    const activeVisits = await VisitModel.find({active: true}).populate('client')
    console.log(`hi activeVisit ${activeVisits}`);
    return res.status(200).json(activeVisits);
  } catch (error) {
    console.log(error);
    res.status(50).send('error @ getActiveVisits')
  }
}

const getUpcomingVisits = async (req, res) => {
  try {
    const upcomingVisits = await VisitModel.find({}).populate("client")
    upcomingVisits.map((visit) => {
      console.log(visit);
    })
    console.log(`hi upcomingVisit ${upcomingVisits}`)
    res.status(200).json(upcomingVisits)
  } catch (error) {
    console.log(error);
    res.status(500).send('error @ getUpcomingVisits')
  }
}

const clientCheckIn = async (req, res) => {
  const { checkInTime, visitId, stylistPin } = req.body;
  //not 100% sure if this is gonna come from the reqbody or reqparams or what....
  try {
    // const stylist = await StylistModel.findOne({ pin: stylistPin });

    // if (!stylist) {
    //   return res.status(404).send("stylist not found");
    //   // we need to work this into the form that they can't submit the form unless the stylist pin given is valid
    // }
    const visit = await VisitModel.findOneAndUpdate({
      id: visitId,
      checkIn: checkInTime,
    });
    return res.status(200).json(visit);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ clientCheckIn");
  }
};

const checkOut = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  let person = await ClientModel.findById({ _id: id });
  console.log(person);

  person.active = false;
  await person.save();

  res.status(200).json({ person });
};

const checkIn = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    let person = await ClientModel.findById({ _id: id });
    console.log(person);
  
    person.active = true;
    await person.save();
  
    res.status(200).json({ person });
};


const clientCheckOut = async (req, res) => {
  const { checkOutTime, visitId, stylistPin } = req.body;
  try {
    const stylist = await StylistModel.findOne({ pin: stylistPin });
    //* need to calculate duration of visit
    const visit = await VisitModel.findOneAndUpdate({
      id: visitId,
      checkOut: checkOutTime,
    });
    return res.status(200).json(visit);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error @ clientCheckIn");
  }
};



module.exports = { createVisit, getVisits, getActiveVisits, clientCheckIn, clientCheckOut, getUpcomingVisits};
