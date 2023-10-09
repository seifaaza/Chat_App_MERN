const express = require('express')
const app = express()
const DbConnect = require('./config/DbConnect')

// Load the environment variables
require('dotenv').config()

// Static files middleware
app.use(express.static('public'))

// Database connection
DbConnect()

app.get('/', (req, res) => res.send('Welcome to my Express.js server!'))




app.listen(process.env.PORT , _ => console.log(`App is running on port ${process.env.PORT}`))