const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.connection_String);
    console.log(
      "<------------Database Connected Successfully---------->",
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;