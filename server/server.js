const express = require('express')
const app = express()

// Import file of database connection config
const DbConnect = require('./config/DbConnect')

// Import authentication routes
const authRoutes = require('./routes/authRoutes')

// Load the environment variables
require('dotenv').config()

// Middlewares
app.use(express.static('public'))
app.use(express.json())

// Database connection
DbConnect()

app.use(authRoutes)

app.listen(process.env.PORT , _ => console.log(`App is running on port ${process.env.PORT}`))