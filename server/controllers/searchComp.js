const ClientModel = require("../models/ClientModel");

const searchClient = async (req, res) => {
  let { searchText } = req.params;

  // if(!searchText) return res.status(401).send("No Search Text Given")

  try {
    console.log(searchText);
    const results = await ClientModel.find({
      name: { $regex: searchText, $options: "i" },
    });
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error in search control");
  }
};

module.exports = { searchClient };
