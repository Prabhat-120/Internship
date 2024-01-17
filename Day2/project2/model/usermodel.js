const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: Boolean, required: true },
  hobbies: { type: [String], default: [] },
  image: {type:String}
});

const User = mongoose.model('User', userSchema);

module.exports = User;