import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/images/Image'
import ButtonLike from '../components/button-like/ButtonLike'


export default function Basket({games, aboutGame}) {
  return (
    <>
      <h3>Basket</h3>
      <ul>
      {games.map((el, i) => (
        <li key={el.name + el.id}>
          <Link to={`/games/${el.id}`} onClick={()=>aboutGame(games[i])}>{el.name}</Link>
            <Image image = {el}/>
        </li>
      ))}
      </ul>

    </>
  )
}