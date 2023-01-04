const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const router = require("./routes/recipe-routes");

const app = express();

// Middlewares
app.use(express.json());
app.use("/recipes", router);

// Connecting to the MongoDB database and app.listen.
mongoose
  .connect(
    "mongodb+srv://avishka_indula:p7iGGaREtxbhN3t3@cluster0.oayvkaz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
