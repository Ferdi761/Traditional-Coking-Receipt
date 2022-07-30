const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: [20, "can't be more than 20 characters"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "must be at least 8 characters"],
    },
    post: [{
        type: String,
    }],
},
{
    collection: 'user'
});

module.exports = mongoose.model("User", userSchema);