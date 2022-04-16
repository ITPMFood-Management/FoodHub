const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Order = new Schema({
    complainttype: {
        type: String,

    }, 

    description: {
        type: String,

    },

    email: {
        type: email,
   
    },
 
 
})

const newComplaint = mongoose.model("complaint" ,  Complaint)
module.exports = newComplaint;