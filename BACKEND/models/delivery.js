const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Delivery = new Schema({
    name: String,
    age: Number,
    address: String,
    phoneNumber: Number,
    email: String,
    workDate: Date,
    birthDate: Date
})

const newDelivery = mongoose.model("delivery" ,  Delivery)
module.exports = newDelivery;