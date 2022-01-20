import React from 'react'
import { Link } from 'react-router-dom'

export default function GamesOnGenres({games, aboutGame}) {
  return (
    <>
    <h3>Games on genres</h3>
    <ul>
    {
      games.map((el, i) => (
        <li>
          <Link to={`/games/${el.id}`} onClick={()=> aboutGame(games[i])}>
            {el.name}
          </Link>
        </li>
      ))
    }
    </ul>

    </>
  )
}