const mongoose = require("mongoose");
const UserDB = require("../models/user")

const db =
  "mongodb+srv://vladislavho:qwerty12345@cluster0.8qmw9.mongodb.net/users-db?retryWrites=true&w=majority";

class User{
  createUser(req, res) {
    const {user} = req.body
      try{
        mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => console.log("Ok mong"))
        .catch((e) => console.log("error", e));
        new UserDB({ ...user })
      .save()
      .then((user) => res.send(user) )
      .catch((e) => console.log("_ERROR_", e));
      // res.send(user)
    } catch (error) {
      console.log(error)
    }

  }
}

module.exports = new User()