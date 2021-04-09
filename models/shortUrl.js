const mongoose = require("mongoose");
const shortID = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortID.generate,
  },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
