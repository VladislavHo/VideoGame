import React from 'react'
import { Link } from 'react-router-dom'

export default function Basket({games, aboutGame}) {
  return (
    <>
      <h3>Basket</h3>
      <ul>
      {games.map((el, i) => (
        <li key={el.name + el.id}>
          <Link to={`/games/${el.id}`} onClick={()=>aboutGame(games[i])}>{el.name}</Link>
        </li>
      ))}
      </ul>

    </>
  )
}