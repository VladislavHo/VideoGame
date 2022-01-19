const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
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
  },
});

const UserDB = mongoose.model("User", usersSchema);

module.exports = UserDB;