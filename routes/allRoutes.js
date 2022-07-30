const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/allControllers');

router.route("/").get(indexView);
router.route("/home").get(homeView);
router.route("/signup").get(signupView).post(createUser);
router.route("/login").get(loginView).post(userLogin);
router.route("/profile/:id").get(profileView).delete(deleteUser);
router.route("/profile/:id/edit").get(editProfileView).post(updateUser);
router.route("/profile/:id/upload").get(uploadContentView).post(createReceipt);
router.route("/logout").get(logout);

module.exports = router;