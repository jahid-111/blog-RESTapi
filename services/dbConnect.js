const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URI;

async function dbConnect() {
  try {
    await mongoose.connect(url, {});
    console.log("✔️✔️  Connected to MongoDB");
  } catch (error) {
    console.error("  ❌❌Error connecting to MongoDB:", error);
  }
}

module.exports = { dbConnect };
