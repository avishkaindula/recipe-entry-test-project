const express = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const app = express();

app.use("/", (req, res, next) => {
  res.send("This is our starting app");
});

mongoose
  .connect(
    "mongodb+srv://avishka_indula:p7iGGaREtxbhN3t3@cluster0.oayvkaz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
