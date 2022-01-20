import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchGames({isCloseSearchGames, games, aboutGame}) {

  const handleClickLinks = (game) =>{
    isCloseSearchGames()
    aboutGame(game)
  }

  return (
    <>
    <h3 onClick={isCloseSearchGames}>Search Games</h3>
    <ul>
    {games.map((el, i) => (
      <li key={el.name + el.id}>
        <Link to={`/games/${el.id}`} onClick={()=> handleClickLinks(games[i])}>{el.name}</Link>
      </li>
      ))}
      <Link to='/games' onClick={isCloseSearchGames}>More</Link>
    </ul>

    </>
  )
}