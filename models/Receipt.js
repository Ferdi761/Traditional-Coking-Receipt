const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
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
    collection: 'receipts'
});

module.exports = mongoose.model("Receipt", receiptSchema);