// Create express app
const express = require('express')
const app = express()

// Database connection
const DbConnect = require('./config/DbConnect')
DbConnect()

// Deployment Url
deploymentUrl = "https://chat-flow.vercel.app"

// Enable cross origin 
const cors = require("cors");
app.use(cors({
    origin: [deploymentUrl],
    // origin: true,
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