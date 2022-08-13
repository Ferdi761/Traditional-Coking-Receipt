const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();
const connectDB = require('./database/connect');
const allRoutes = require('./routes/allRoutes');
const port = process.env.PORT || 3000;

// image handlers
const multer = require('multer');
const receiptStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/receipt-images');
    }
});

const userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/user-images');
    }
});

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
    } catch (err) {
        console.error(err);
    }
};
  
start();