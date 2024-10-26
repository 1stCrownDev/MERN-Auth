require('dotenv').config()
const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const PORT = process.env.PORT || 5000



const app = express();


// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes


// Server Connection
const server = () => {
    db();
    app.listen(PORT, ()=>{
        console.log(`App running on Port: ${PORT}`)
    })
}

server();