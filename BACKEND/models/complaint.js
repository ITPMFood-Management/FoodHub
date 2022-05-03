const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Complaint = new Schema({
    ctype: {
        type: String,

    }, 

    description: {
        type: String,

    },

    email: {
        type: String,
   
    },
   
 
})

const newComplaint = mongoose.model("complaints" ,  Complaint)
module.exports = newComplaint;