// Create express app
const express = require('express')
const app = express()

// Database connection
const dbConnect = require('./config/dbConnection')
dbConnect()

// Enable cross origin 
const cors = require("cors");
app.use(cors({
    // origin: process.env.deploymentClientUrl,
    // origin: process.env.localClientUrl,
    origin: "http://localhost:5173",
    credentials: true
  }));


// Load the environment variables
require('dotenv').config()

// Middlewares
app.use(express.static('public'))
app.use(express.json())

// Routing
const authRoutes = require('./routes/authRoutes')
app.use(authRoutes)

// Run App
app.listen(process.env.PORT , _ => console.log(`App is running on port ${process.env.PORT}`))