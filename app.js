const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();
const connectDB = require('./database/connect');
const {
    loginView,
    homeView,
    indexView,
} = require('./controllers/taskControllers');
const port = process.env.PORT || 3000;

// Using public directory
app.use(express.static(path.join(__dirname, '/public')));
// console.log(__dirname);

// set ejs as view engine
app.set('view engine', 'ejs');

app.get('/', indexView);

// not yet implemented
app.get('/signup', (req, res) => {
    res.status(201);
    res.render('signup');
});

app.get('/login', loginView);

app.get('/home', homeView);

// ongoing
app.get('/logout', (req, res) => {
    res.status(201);
    res.redirect('/');
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
};
  
start();