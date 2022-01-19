const Router = require('express').Router
const User = require("../controllers/user")


const router = new Router()

router.post('/create-user', User.createUser)

module.exports = router