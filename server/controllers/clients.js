const ClientModel = require("../models/ClientModel");
const VisitModel = require('../models/VisitModel');

const getClients = async (req, res) => {
  const clients = await ClientModel.find({});
  res.status(200).json({ clients });
};

const checkOut = async (req, res) => {
  try{
    const { id } = req.body;
    console.log(id);
    // let person = await ClientModel.findById({ _id: id });
    let visit = await VisitModel.findById({_id: id})
  
    visit.active = false;
    await visit.save();
    // console.log(visit);
    res.status(200).json({ visit });
  }
  catch(error){
    console.log(error);
    res.status(500).send('error @ checkOut')
  }
};

const checkIn = async (req, res) => {
  try{
    const { id } = req.body;
    console.log(id);
    let visit = await VisitModel.findById({ _id: id });
    console.log(visit);
  
    visit.active = true;
    await visit.save();
  
    res.status(200).json({visit});
  }
  catch(error) {
    console.log(error);
    res.status(500).send('error @ checkIn')
  }
};

const deleteClient = async(req,res) => {
  try {
    const {clientId} = req.params;

    const client = await ClientModel.findByIdAndDelete(clientId)


    if(!client) return res.status(404).send('Client Not Found')

    await client.remove()
    return res.status(200).send("Client Deleted")
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server Error in deleteClient')
  }
}

getVisits = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await UserModel.findOne({ username: username.toLowerCase() });

    if (!user) {
      return res.status(404).send("User Not Found");
    }

    const visits = await PostModel.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate("user")
    return res.status(200).json(visits)
  } catch (error) {
    console.log(error);
    return res.status(500).send('server error @ getVisits')
  }
}


module.exports = { getClients, checkIn, checkOut, deleteClient, getVisits };
//! get visits is not in a router yet
