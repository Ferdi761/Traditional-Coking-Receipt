const express = require('express');
const router = express.Router();

const {
    indexView,
    loginView,
    homeView,
    signupView,
    profileView,
    editProfileView,
    createUser,
    userLogin,
    updateProfile,
} = require('./controllers/allControllers');

router.route("/").get(indexView);
router.route("/home").get(homeView);
router.route("/signup").get(signupView).post(createUser);
router.route("/login").get(loginView).post(userLogin);
router.route("/profile/:id").get(profileView);
router.route("/profile/:id/edit").get(editProfileView).post(updateProfile);