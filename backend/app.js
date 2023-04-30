const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require('./Routes/urlRoutes');

const app = express();

app.use(express.json());

app.use(cors());

app.use("/url", router);

mongoose.connect("mongodb+srv://admin:fq5DDj2HdTMjyHtu@cluster0.mvk6pix.mongodb.net/URL-Shortner?retryWrites=true&w=majority")
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  }).catch((err) => console.error(err));
