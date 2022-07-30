const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();
const connectDB = require('./database/connect');
const allRoutes = require('./routes/allRoutes');
const port = process.env.PORT || 3000;

// Using public directory
app.use(express.static(path.join(__dirname, '/public')));

// set ejs as view engine
app.set('view engine', 'ejs');

// set bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// using all route
app.use('/', allRoutes);

// try to connect to mongoDB and running the server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
};
  
start();