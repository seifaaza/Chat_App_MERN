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
    // origin: "https://chatflow-pdnb.onrender.com",
    origin: "http://localhost:5173",
    credentials: true
  }));


// Load the environment variables
require('dotenv').config()

// Enable read cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Enable Parsing Request Data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(express.static('public'))
app.use(express.json())

// Routing
const authRoutes = require('./routes/authRoutes')
app.use(authRoutes)

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

// Run App
app.listen(process.env.PORT , _ => console.log(`App is running on port ${process.env.PORT}`))