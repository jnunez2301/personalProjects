const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = `${process.env.MONGODB_URI}`;

async function mongoConnect(){
    try{
        await mongoose.connect(mongoDB);
        console.log(`connected to mongoDB`);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = mongoConnect;