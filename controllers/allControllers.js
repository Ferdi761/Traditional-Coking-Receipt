// const Author = require('../models/Author');
const User = require('../models/User');
const Receipt = require('../models/Receipt');

// not yet implemented
// const getAllContents = (req, res) => {
//         Receipt.find({}, (err, receipt) => {

//         });
// };

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
const homeView = async (req, res) => {
    try {
        const receipt = await Receipt.find({});
    
        res.status(201);
        res.render('home', { receiptData: receipt });
    }
    catch (err) {
        res.status(500).send("<h1>" + err.code + err.message + "</h1>");
        console.error(err);
    }
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
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const data = {
        username,
        email,
        password,
    };

    try {
        const user = await User.create(data);

        res.status(201).redirect('/login');
    }
    catch (err) {
        res.status(500).send("<h1>" + err.code + err.message + "</h1>");
        console.error(err);
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

// not implemented yet still need to be improved
const createReceipt = async (req, res) => {
    const userID = req.params.id;
    const image = req.body.receiptImage;
    const title = req.body.receiptTitle;
    const description = req.body.receiptDesc;
    const body = req.body.receiptBody;
    const data = {
        image,
        title,
        description,
        body,
    };

    try {
        const receiptData = await Receipt.create(data);
        const user = await User.findbyID(userID);

        await user["receipt"].insert(receiptData["_id"]);

        res.status(201);
        res.redirect('/home');
    }
    catch (err) {
        res.status(500).send("<h1>" + err.code + err.message + "</h1>");
        console.error(err);
    }
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