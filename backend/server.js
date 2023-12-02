const express = require('express');
const app = express();
//const port = process.env.port || 4000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

app.use(cors());

const userRoute = require('./routes/userRoute');

//middleware
app.use(express.json());

//mongodb connection
mongoose.connect(process.env.URI).then(()=>{
    console.log("connected successfully");
}).catch((error)=>{
console.log("error",error);
})

app.use(userRoute);

app.listen(process.env.PORT || 8000,(err)=>{
    if(err)console.log(err);
console.log(`running successfully at ${process.env.PORT}`);
})