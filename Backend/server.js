const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
require("dotenv").config();

//express app
const app = express();

//middleware
app.use(express.json()); //working is Unknown

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and Listening to ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log("Not connected!");
    console.log("reason : ", error);
  });
