//const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
//const http = require("http");

const path = require('path')

const host = 'localhost';
const port = 8000;
//const {PORT} = process.env;
//const {HOST} = process.env;
//const port = process.env.PORT || PORT
//const host = process.env.HOST || HOST

const app = express();

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!");
// };

// app.use("/", (req, res, next) => {
//     //res.writeHead(200);
//     res.send("My first server!");
// });

//sent file
app.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname, '/Pages/Home.html'));
  });

  app.get("/Contact.html", function(req, res, next) {
    res.sendFile(path.join(__dirname, '/Pages/Contact.html'));
  });

  app.get("/About.html", function(req, res, next) {
    res.sendFile(path.join(__dirname, '/Pages/About.html'));
  });


// Server setup
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);

  });

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });