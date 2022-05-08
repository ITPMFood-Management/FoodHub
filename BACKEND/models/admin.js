const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Please enter a username"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "Please provide a valid email"] 
    },
    password: {
        type: String,
        required: [true, "Plase enter a password"],
        select: false,
        minlength: 6 //minimum password length is 6
    },
})

//this is for register route
UserSchema.pre("save", async function(next){ //password encryption goes here
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt); //await is only can use in async function only

    next();
})

//this is for login route
UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password); //check the entered password and password which is received from the db
}

//for register json web token (JWT)
UserSchema.methods.getSignedToken = function(){
    return jwt.sign({id : this._id} , process.env.JWT_SECRET , {expiresIn : process.env.JWT_EXPIRE} );
}

const Admin = mongoose.model("admin", UserSchema);
module.exports = Admin;