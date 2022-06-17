const express = require("express");
//const connectDB = require('./db');
require("dotenv").config(); // gives access to the environmental variable in .env okay

//const {HOST} = process.env;
const { PORT } = process.env;

const port = process.env.PORT || PORT;

// init express app

const app = express();
//middle ware
app.use(express.json({ extended: false }));

//creat a basic expres  app
app.get("./", (req, res) => res.json({ message: "Welcome to my app " }));

// PORT

// Handling GET / request
app.use("/", (req, res, next) => {
  res.send("This is the express server");
});

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
  res.send("This is the hello response");
});

// Server setup
app.listen(port, () => {
  console.log("Server is Running");
});
