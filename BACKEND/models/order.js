const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Order = new Schema({
    name: String,

    address: String,
    phoneNumber: Number,
    email: String,
  
})

const newOrder = mongoose.model("orders" ,  Order)
module.exports = newOrder;