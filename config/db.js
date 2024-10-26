// Mongo DB Connections

const mongoose = require('mongoose');


const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Connection Successful!');
    } catch (error) {
        console.log('Error in DB connection: ' + error);
    }
};


module.exports = { db };