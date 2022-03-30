const ClientModel = require("../models/ClientModel");


const getClients = async (req, res) => {
    const clients = await ClientModel.find({});
    res.status(200).json({clients})
}


module.exports = {getClients}