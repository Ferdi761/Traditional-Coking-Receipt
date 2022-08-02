const mongoose = require('mongoose');
const { Schema } = mongoose;
const { isEmail } = require("validator");

const userSchema = Schema({
    _id: Schema.Types.ObjectId,
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

    receipts: [{ type: Schema.Types.ObjectId, ref: 'Receipt', }],
});

const receiptSchema = Schema({
    _id: Schema.Types.ObjectId,
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        ref: 'User',
    },

    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});