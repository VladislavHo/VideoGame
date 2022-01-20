import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLike from '../components/buttonLike/ButtonLike'

export default function GamesOnGenres({games, aboutGame}) {
  return (
    <>
    <h3>Games on genres</h3>
    <ul>
    {
      games.map((el, i) => (
        <li key={el.name + el.id}> 
          <Link to={`/games/${el.id}`} onClick={()=> aboutGame(el)}>
            {el.name}
          </Link>
          <ButtonLike game ={el}/>
        </li>
        
      ))
    }
    </ul>

    </>
  )
}