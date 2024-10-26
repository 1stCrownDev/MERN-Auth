const express = require('express');
const{ db }= require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;



// Middleware Connections/
/*app.cors({
    origin: 'https://localhost:3000',
    credentials: true,
}) */
app.use(cors());
app.use(express.json());


// Routes
app.use('/auth', authRoutes);

// Server Connection
const server = () => {
    db()
    app.listen(PORT, ()=>{
        console.log(`App running on Port: ${PORT}`)
    })
}

server();