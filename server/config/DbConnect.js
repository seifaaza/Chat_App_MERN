const mongoose = require("mongoose");
require('dotenv').config()

const DbConnect = async () =>  {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = DbConnect;