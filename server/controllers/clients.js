const ClientModel = require("../models/ClientModel");

const getClients = async (req, res) => {
  const clients = await ClientModel.find({});
  res.status(200).json({ clients });
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

module.exports = { getClients, checkIn, checkOut };
