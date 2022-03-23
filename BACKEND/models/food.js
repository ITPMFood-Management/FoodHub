const mongooes = require('mongoose');

const postSchema = new mongooes.Schema({
    Foodname:{
        type:String,
        requored:true

     },
     Itemprice:{
         type:String,
         required:true
     },
     Foodcategory:{
         type:String,
         required:true
     },
     Foodstatus:{
        type:String,
        required:true
    }

    });

    module.exports = mongooes.model('foods',postSchema);
