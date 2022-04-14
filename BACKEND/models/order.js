const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Order = new Schema({
    customername: {
        type: String,

    }, 

    phoneNumber: {
        type: Number,

    },

    address: {
        type: String,
   
    },

    category: {
        type: String,

    },

    itemnumber: {
        type: String,

    }, 

    quantity: {
        type: Number,

    },
    
    
    
 
})

const newOrder = mongoose.model("orders" ,  Order)
module.exports = newOrder;