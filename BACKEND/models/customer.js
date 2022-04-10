const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        
        trim: true
    }, 

    age: {
        type: Number,
       
        trim: true
    },

    gender: {
        type: String,
       
        trim: true
    }, 

    address: {
        type: String,
   
        trim: true
    },
    
    phone: {
        type: Number,
       
        trim: true
    },

    email:{
        type:String,

        unique:true,
    },

    

});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;