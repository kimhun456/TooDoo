const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define schema
const accountSchema = Schema({
  email: {
    type: String,
    index: true,
    unique: true,
  },
  joinDate: { type: Date, default: Date.now },
  password: String,
  name: String,
  photo: String,
});

// modeling Schema
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
