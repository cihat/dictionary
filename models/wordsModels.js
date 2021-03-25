const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordSchema = new Schema({
  words: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("word", wordSchema);
