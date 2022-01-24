const Router = require('express').Router
const User = require("../controllers/user")
const GamesIGDB = require("../controllers/games")

const router = new Router()

router.post('/registration', User.registration)

router.post('/login', User.login)

router.post('/search-games', GamesIGDB.getGameSearch)

router.get('/genres', GamesIGDB.getGenresofGames)

router.post('/game-on-genres', GamesIGDB.getGamesOnGenres)

module.exports = router