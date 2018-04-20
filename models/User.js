const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// call this function from outside, use mongoose's find
UserSchema.methods.getUserById = function(id){
    User.findById(id, callback);
}

// find user by username
UserSchema.methods.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}

// keep everything encapsulated, don't do this outside routes
UserSchema.methods.addUser = function(newUser, callback){
    // generate the salt
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

UserSchema.methods.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
        if (err) throw err;
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
