const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ID:{
        type: String,
        default: ''
    },
    name:{
        type: String,
        default: ''
    },
    price:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default: ''
    },
    quantity: {
        type: String,
        default: ''
    },
    expiration: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Product',ProductSchema);