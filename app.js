const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname, '/public')));
// console.log(__dirname);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(201);
    res.render('index');
});

// not yet implemented
app.get('/signup', (req, res) => {
    res.status(201);
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.status(201);
    res.render('login');
});

app.get('/home', (req, res) => {
    res.status(201);
    res.render('home')
});

app.get('/logout', (req, res) => {
    res.status(201);
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});