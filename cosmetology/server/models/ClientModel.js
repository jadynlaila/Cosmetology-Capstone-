const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'client must enter a name']
    },
    email: {
        type: String,
        //! will need regex to make sure this is a valid email
    },
    address: {
        type: String
        //! will need regex for this
    },
    phone: {
        //! will need regex for this
    },
    dob: {
        // (date of birth)
        // type: Date 
    },

    //* all of these can be radio buttons on the form. ~~~~~~~~~~~
    hairCondition:{},
    scalpCondition:{},
    hairTexture:{},
    growthPatterns:{},
    hairDensity:{},
    hairPorosity:{},
    hairElasticity:{},
    hairLength:{},
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
