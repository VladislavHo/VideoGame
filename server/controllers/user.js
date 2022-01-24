const mongoose = require("mongoose");
const UserDB = require("../models/user")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateAccessToken =(id)=> {
  const payload = {
    id
  }
  return jwt.sign(payload, process.env.TOKEN_JWT_KEY, {expiresIn: '24h'})
}

class User{
  async registration(req, res) {
    try{
        const {user} = req.body
        const {email, password} = user

        const candidate = await UserDB.findOne({email})
        if(candidate) {
          res.status(400).json({message: email + ' уже существует!'})
        }
        const hashPassword = bcrypt.hashSync(password, 6);
        const token = generateAccessToken(user._id)
        const newActiveUser = new UserDB({...user, token, password: hashPassword})
        await newActiveUser.save()

        return res.status(200).send(newActiveUser)

    } catch (error) {
      res.status(400).json({message: error.message})
    }

  }
  async login(req, res) {
    try {
        const {email, password} = req.body.user
        console.log(email, password)
        const user = await UserDB.findOne({email})

        if(!user) {
          res.status(400).json({message: `пользавтель ${email} не найден!`})
        }
       
        console.log(user.password)
        const validPassword =  bcrypt.compareSync(password, user.password)

        if(!validPassword) {
          res.status(400).json({message: 'Неверный пароль'})
        }
        
        

        return res.send({token})

      //  res.status(200).json()
    } catch (error) {
       res.status(400).json({message: error.message})
    }
  }
}

module.exports = new User()