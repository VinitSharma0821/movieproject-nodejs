const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected Sucessfully");
  } catch (error) {
    console.log("Database connection failed: ", error.message);
  }
};

module.exports = { connectDatabase };
