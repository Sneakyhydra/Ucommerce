/**
 * Imports
 */
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// saving the Connections string
// "mongoURI": "mongodb+srv://sneakyhydra:sneaky123@ucommerce.z0ygv.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
  try {
    // Connect to mongoDB
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    // Exit process with failure
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
