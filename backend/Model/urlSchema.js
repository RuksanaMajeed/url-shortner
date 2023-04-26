const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
    },
  shortUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Url", urlSchema);