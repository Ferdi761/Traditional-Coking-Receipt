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

// not implemented yet
const userLogin = (req, res) => {
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

module.exports = { 
    indexView,
    loginView,
    homeView,
    signupView,
    profileView,
    editProfileView,
    createUser,
    userLogin,
    updateUser,
    deleteUser, 
    createReceipt, 
};