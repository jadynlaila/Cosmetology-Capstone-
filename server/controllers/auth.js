const StylistModel = require("../models/StylistModel");
const TeacherModel = require('../models/TeacherModel')



const getUserAuth = async(req,res) => {
    const {stylistID, teacherID} = req;

    if(!stylistID || !teacherID) return res.status(500).send("No user ID")
    try {
        const stylist = await StylistModel.findById(stylistID)
        const teacher = await TeacherModel.findById(teacherID)
        return res.status(200).json({stylist, teacher})
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error in aith Controller")
    }
}


module.exports = {getUserAuth}