const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts.js");
const mongoose = require("mongoose");

// express app
const app = express();
const PORT = process.env.PORT;
const DB = process.env.MONGO_URI;
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

// connect to the database
mongoose
  .connect(DB)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("Connected to the port & listening on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
