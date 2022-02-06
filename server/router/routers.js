const Router = require('express').Router
const User = require("../controllers/user")
const GamesIGDB = require("../controllers/games")

const router = new Router()

router.post('/auth/registration', User.registration)

router.post('/auth/login', User.login)

router.post('/search-games', GamesIGDB.getGameSearch)

router.get('/genres', GamesIGDB.getGenresofGames)

router.post('/game-on-genres', GamesIGDB.getGamesOnGenres)

router.post('/update-basket', User.updataBasket)

module.exports = router