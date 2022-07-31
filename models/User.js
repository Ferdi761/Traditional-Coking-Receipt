const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username tidak boleh kosong"],
        maxlength: [20, "username maksimal 20 karakter"],
    },
    email: {
        type: String,
        required: [true, "email tidak boleh kosong"],
        unique: true,
        validate: [isEmail, "masukkan email yang valid"],
        
    },
    password: {
        type: String,
        required: [true, "password tidak boleh kosong"],
        minlength: [8, "panjang password minimal 8 karakter"],
    },
    post: [{}],
},
{
    collection: 'users'
});

module.exports = mongoose.model("User", userSchema);