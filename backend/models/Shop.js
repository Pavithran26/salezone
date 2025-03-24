const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    inventory: [{ productName: String, available: Boolean, price: Number }],
});

module.exports = mongoose.model('Shop', shopSchema);