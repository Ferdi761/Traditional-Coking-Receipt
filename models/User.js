const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require ('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username tidak boleh kosong"],
        maxlength: [20, "username maksimal 20 karakter"]
    },
    email: {
        type: String,
        required: [true, "email tidak boleh kosong"],
        unique: [true, "email yang anda masukkan telah terdaftar"],
        validate: [isEmail, "masukkan email yang valid"]
        
    },
    password: {
        type: String,
        required: [true, "password tidak boleh kosong"],
        minlength: [8, "panjang password minimal 8 karakter"]
    },

    receipt: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Receipt'
    }]
});

// hashing password before save it innto database
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", userSchema);