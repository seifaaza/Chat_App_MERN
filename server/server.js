// Create express app
const express = require('express')
const app = express()

// Database connection
const dbConnect = require('./config/dbConnection')
dbConnect()

// Enable cross origin 


  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    // Add other CORS headers as needed
    next();
  });

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