const {Schema, model} = require("mongoose");


const UserDB = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  }
});



module.exports = model('UserDB', UserDB);