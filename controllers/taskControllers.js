
const loginView = (req, res) => {
    res.status(201);
    res.render('login');
};

const homeView = (req, res) => {
    res.status(201);
    res.render('home');
};

const indexView = (req, res) => {
    res.status(201);
    res.render('index');
};

const createUser = (req, res) => {
    res.status(201);
    res.render('index');
};

const createReceipt = (req, res) => {
    res.status(201);
    res.render('index');
};

module.exports = { loginView, homeView, indexView, createUser, createReceipt, };