const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
    image: String,
    author: String,
    description: String,
    body: String,
},
{
    collection: 'receipt'
});

module.exports = mongoose.model("Receipt", receiptSchema);