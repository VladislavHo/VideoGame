import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'
import ButtonLike from '../components/button-like/ButtonLike'
import Images from '../components/images/Image'

export default function GamesOnGenres({aboutGame}) {
  const {gamesOnGenrs} = useContext(MyContext)
  return (
    <>
    <h3>Games on genres</h3>
    <ul>
    {
      gamesOnGenrs.map((el, i) => (
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