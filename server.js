const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api"));
app.use(require("./routes/homeroutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});