const User = require('../models/User');
const Receipt = require('../models/Receipt');

// done but still need to be improved
const indexView = (req, res) => {
    res.status(201);
    res.render('index');
};

// done but still need to be improved
const signupView = (req, res) => {
    res.status(201);
    res.render('signup');
};

// done but still need to be improved
const loginView = (req, res) => {
    res.status(201);
    res.render('login');
};

// done but still need to be improved
const homeView = (req, res) => {
    res.status(201);
    res.render('home');
};

// not implemented yet
const profileView = (req, res) => {
    res.status(201);
    res.render('index');
};

// not implemented yet
const editProfileView = (req, res) => {
    res.status(201);
    res.render('index');
};

// ongoing
const uploadContentView = (req, res) => {
    res.status(201);
    res.render('contentUpload');
};

// done but still need to be improved
const createUser = async (req, res) => {
    try {
        let username = req.body.inputUsername;
        let email = req.body.inputEmail;
        let password = req.body.inputPassword;

        let data = {
            username,
            email,
            password,
        };
        const user = await User.create(data);

        res.status(201).redirect('/login');
    }
    catch (err) {
        res.status(500);
        console.log(err);
    }
};

// not implemented yet
const userLogin = async (req, res) => {
    try {
        res.status(201);
        res.render('index');
    }
    catch (err) {
        res.status(500);
        console.log(err);
    }
};

// not implemented yet
const createReceipt = (req, res) => {
    res.status(201);
    res.render('index');
};

// not implemented yet
const updateUser = (req, res) => {
    res.status(201);
    res.render('index');
};

// not implemented yet
const deleteUser = (req, res) => {
    res.status(201);
    res.render('index');
};

// not implemented yet
const logout = (req, res) => {
    res.status(201);
    res.redirect('/');
};

module.exports = { 
    indexView,
    loginView,
    homeView,
    signupView,
    profileView,
    editProfileView,
    uploadContentView,
    createUser,
    userLogin,
    updateUser,
    deleteUser, 
    createReceipt,
    logout, 
};