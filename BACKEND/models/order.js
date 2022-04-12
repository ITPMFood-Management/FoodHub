const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Order = new Schema({
    customername: {
        type: String,
        
        trim: true
    }, 

    category: {
        type: String,
       
        trim: true
    },

    itemnumber: {
        type: Number,
       
        trim: true
    }, 

    quantity: {
        type: String,
   
    },
    
    phoneNumber: {
        type: Number,
       
        trim: true
    },
    address: {
        type: String,
       
        trim: true
    },

   

    
 
  
})

const newOrder = mongoose.model("orders" ,  Order)
module.exports = newOrder;