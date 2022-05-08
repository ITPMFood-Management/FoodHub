const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
const dotenv   = require("dotenv");



dotenv.config();

const URL = 'mongodb+srv://food:food@foodhub.snug7.mongodb.net/FoodHub1?retryWrites=true&w=majority';

mongoose.connect(URL,{

});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection was successful");
})

const app = express();

const PORT = process.env.PORT || 8070


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})


app.use('/customer',require('./BACKEND/routes/customer'))

app.use('/food',require('./BACKEND/routes/Food'))




app.use('/orders',require('./BACKEND/routes/order'))


// const delivery=require('./BACKEND/routes/delivery');
app.use('/complaints',require('./BACKEND/routes/complaint'))
app.use("/api/auth",require("./BACKEND/routes/auth"))
app.use("/api/auth/admin",require("./BACKEND/routes/admin"))
app.use("/delivery",require('./BACKEND/routes/delivery'))