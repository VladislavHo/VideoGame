import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLike from '../components/button-like/ButtonLike'
import Images from '../components/images/Image'

export default function GamesOnGenres({games, aboutGame}) {
  console.log(games)
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
            <Images image = {el}/>
            <ButtonLike game ={el}/>
        </li>
        
      ))
    }
    </ul>

    </>
  )
}