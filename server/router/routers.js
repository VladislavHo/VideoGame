const Router = require('express').Router
const User = require("../controllers/user")
const GettingDataIGDB = require("../controllers/getting-game-data")

const router = new Router()

router.post('/registration', User.registration)

router.post('/search-games', GettingDataIGDB.getGameSearch)

router.get('/genres', GettingDataIGDB.getGenresofGames)

router.post('/game-on-genres', GettingDataIGDB.getGamesOnGenres)

module.exports = router