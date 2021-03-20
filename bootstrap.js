const mongoose = require("mongoose");
require("dotenv").config();

const connectionString =
  `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ch6le.mongodb.net/${process.env.words}?retryWrites=true&w=majority` ||
  "mongodb://mongodb:27017/word";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { mongoose };
