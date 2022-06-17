const mongoose = require("mongoose");
require("dotenv").config();

const http = require("http");

//const host = 'localhost';
//const port = 8000;
const {PORT} = process.env;
const {HOST} = process.env;
const port = process.env.PORT || PORT
const host = process.env.HOST || HOST


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener);
server.listen(port, HOST, () => {
    console.log(`Server is running on http://${host}:${port}`);
});