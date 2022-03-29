const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'client must enter a name']
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    dob: {
        type: Date,
    },

    //* all of these can be radio buttons on the form. ~~~~~~~~~~~
    hairCondition:{
        type: String || null
    },
    scalpCondition:{
        type: String || null
    },
    hairTexture:{
        type: String || null
    },
    growthPatterns:{
        type: String || null
    },
    hairDensity:{
        type: String || null
    },
    hairPorosity:{
        type: String || null
    },
    hairElasticity:{
        type: String || null
    },
    hairLength:{
        type: String || null
    },
    //! these can be strings OR NULL in case a user doesn't know/want to enter this info
    //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    allergies:{
        type: String || null
    },
    medicalInfo:{
        type: String || null
    }
})

module.exports = mongoose.model("Client", ClientSchema);
