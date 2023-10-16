// Create express app
const express = require('express')
const app = express()

// Database connection
const dbConnect = require('./config/dbConnection')
dbConnect()

// Deployment Url
localClientUrl = "http://localhost:5173"
deploymentClientUrl = "https://chatflow-pdnb.onrender.com"

// Enable cross origin 
const cors = require("cors");
app.use(cors({
    // origin: process.env.deploymentClientUrl,
    origin: process.env.deploymentClientUrl,
    credentials: true
  }));

// Load the environment variables
require('dotenv').config()

app.get('/', (req, res) => res.json('hello'))

// Middlewares
app.use(express.static('public'))
app.use(express.json())

// Routing
const authRoutes = require('./routes/authRoutes')
app.use(authRoutes)

// Run App
app.listen(process.env.PORT , _ => console.log(`App is running on port ${process.env.PORT}`))