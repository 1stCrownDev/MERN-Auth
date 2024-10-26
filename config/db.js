// Mongo DB Connections
const { default: mongoose } = require('mongoose');


const db = () => {

mongoose.set('strictQuery')
    try {
    mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Connection Succeeded.')
    } catch (error) {
        console.log('Error in DB connection: ' + error)
    }
};


module.exports = { db }