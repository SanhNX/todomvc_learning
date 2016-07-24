// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// Schema
var orderSchema = new mongoose.Schema({
    order_id: String,
    total: String
});

// Return model
module.exports = restful.model('Products', productSchema);
module.exports = restful.model('Orders', orderSchema);