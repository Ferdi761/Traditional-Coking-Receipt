const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
    authorID: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
},
{
    collection: 'receipt'
});

module.exports = mongoose.model("Receipt", receiptSchema);