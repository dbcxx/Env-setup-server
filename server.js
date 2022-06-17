const express = require('express');
const connectDB = require('./db');
require('dotenv').config()// gives access to the environmental variable in .env okay  
const {PORT} = process.env;

//db connection
connectDB()

// init express app 

const app = express();
 //middle ware 
 app.use(express.json({ extended: false}));

 //creat a basic expres  app 
 app.get('./', (req, res) => res.json({ message: "Welcome to my app "}));

 // PORT 
const port = process.env.PORT || PORT;

//listening on the port created 

app.listen(port, () => console.log(`APP running on port ${port}`))