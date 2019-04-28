// def express and def port
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// init express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// def express route and init for prod
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// init mongoose for prod or dev given dependencies
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks"
mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

// incl api routes for express app
require("./routes/api_routes")(app);

// init server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});