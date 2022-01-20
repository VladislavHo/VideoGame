const igdb = require('igdb-api-node').default
require('dotenv').config()

class GettingDataIGDB{
  async getGameSearch(req, res) {
    const {game, genresID = null} = req.body
    try{
      const response = await igdb(
        process.env.YOUR_TWITCH_CLIENT_ID,
        process.env.YOUR_TWITCH_APP_ACCESS_TOKEN
        )
        .fields(['name'])
        .where(genresID)
        .limit(500)
        .search(game)
        .request('/games')

      return res.send(response.data)
        
    }catch(e){
      console.log(e.message)
    }
  }

 async getGenresofGames (req, res) {
    try {
      const response = await igdb(
        process.env.YOUR_TWITCH_CLIENT_ID,
        process.env.YOUR_TWITCH_APP_ACCESS_TOKEN
        )
      .fields(['*'])
      .limit(500)
      .request('/genres')

      return res.send(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

    async getGamesOnGenres(req, res) {
      const {id} = req.body
      try {
        const response = await igdb(
          process.env.YOUR_TWITCH_CLIENT_ID,
          process.env.YOUR_TWITCH_APP_ACCESS_TOKEN
          )
          .fields(["*"])
          .limit(500)
          .where([`genres = ('${id}')`])
          .request(`/games`)

         return res.send(response.data)

      } catch (error) {
        console.log(error.message)
      }
    }

}



module.exports = new GettingDataIGDB()