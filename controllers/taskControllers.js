const indexView = (req, res) => {
    res.status(201);
    res.render('index');
};

const signupView = (req, res) => {
    res.status(201);
    res.render('signup');
};
const loginView = (req, res) => {
    res.status(201);
    res.render('login');
};

const homeView = (req, res) => {
    res.status(201);
    res.render('home');
};

// not implemented yet
const createUser = (req, res) => {
    res.status(201);
    res.render('index');
};

// not implemented yet
const createReceipt = (req, res) => {
    res.status(201);
    res.render('index');
};

module.exports = { 
    indexView, 
    loginView, 
    homeView, 
    signupView, 
    createUser, 
    createReceipt, 
};