const mongoose = reuire("mongoose");
const Schema = mongoose.Schema;

const ProductSchmema = new Schema({
    name:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    Itemprice:{
        type:Number,
        required:true
    },
    Foodcatergory:{
        type:String,
        required:true
    },
    Foodstatus:{
        type:String,
        required:true
    }
})

const Product = mongoose .model("products" , ProductSchmema);

module.exports = Product;