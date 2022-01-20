const mongoose = require("mongoose");
const UserDB = require("../models/user")



class User{
  createUser(req, res) {
    const {user} = req.body
      try{
        mongoose
        .connect(process.env.MONGODB_KEY, { useNewUrlParser: true, useUnifiedTopology: true })
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