const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'client must enter a name']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: [true, 'client must enter a address']
    },
    phone: {
        type: String,
        required: [true, 'client must enter a phone']
    },
    dob: {
        type: Date,
        required: [true, 'client must enter a dob']
    },

    //* all of these can be radio buttons on the form. ~~~~~~~~~~~
    hairCondition:{
        type: String || Boolean || null,
        required: false
    },
    scalpCondition:{
        type: String || Boolean || null,
        required: false
    },
    hairTexture:{
        type: String || Boolean || null,
        required: false
    },
    growthPatterns:{
        type: String || Boolean || null,
        required: false
    },
    hairDensity:{
        type: String || Boolean || null,
        required: false
    },
    hairPorosity:{
        type: String || Boolean || null,
        required: false
    },
    hairElasticity:{
        type: String || Boolean || null,
        required: false
    },
    hairLength:{
        type: String || Boolean || null,
        required: false
    },
    //! these can be strings OR NULL in case a user doesn't know/want to enter this info
    //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    allergies:{
        type: String || null,
        required: [true, 'if not applicable type N/A']
    },
    medicalInfo:{
        type: String || null,
        required: [true, 'if not applicable type N/A']
    }
})

module.exports = mongoose.model("Client", ClientSchema);
