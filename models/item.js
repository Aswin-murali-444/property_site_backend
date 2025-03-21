const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: { type: String },
    desc: { type: String },
    location: { type: String },
    price: { type: Number }
});

// Use `itemSchema` in the model creation
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
