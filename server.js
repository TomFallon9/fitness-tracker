const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        useFindAndModify: false
    
});



// routes
app.use(require("./routes/api"));
app.use(require("./routes/html-routes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});