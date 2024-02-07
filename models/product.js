const mongoose = require('mongoose');
const moment = require('moment-timezone')

const ProductSchema = new mongoose.Schema({
    productname: String,
    type: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model('Product', ProductSchema);

