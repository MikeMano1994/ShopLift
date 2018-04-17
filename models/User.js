const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  ID: {
      type: String,
      default: ''
  },

  name: {
      type: String,
      default: ''
  },

  email: {
      type: String,
      default: ''
  },

  password: {
      type: String,
      default: ''
  },

  cart: {
      type: Array,
      default: []
  },

  cartHistory: {
      type: Array,
      default: []
  },

  address: {
      type: String,
      default: ''
  },

  city: {
      type: String,
      default: ''
  },

  state: {
      type: String,
      default: ''
  },

  postal: {
      type: String,
      default: ''
  }
});

module.exports = mongoose.model('User', UserSchema);
