const mongooes = require("mongoose");
const Schema = mongooes.Schema;

const Food = new Schema({
    Foodcode:{
        type:String,
        trim: true

    },
    Foodname:{
        type:String,
        

     },
     Itemprice:{
         type:Number,
        
     },
     Foodcatergory:{
         type:String,
        
     },
     Foodstatus:{
        type:String,
       
    },
    ExpDate:{
      type:Date,
       
    },
    MFDDate:{
        type:Date,
        
    },

    });

    const newFood = mongooes.model("food",Food);

    module.exports = newFood;
