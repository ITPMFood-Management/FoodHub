const mongoose =require('mongoose');
const express = require('express');

const app =express();

const PORT =8000;
const DB_URL ='mongodb+srv://food:food@foodhub.snug7.mongodb.net/FoodHub?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
            useUnifiedTopology: true,
           
})

.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>console.log('DB connection ERROR',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});





