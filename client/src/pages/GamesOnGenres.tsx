import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'
import ButtonLike from '../components/buttons/ButtonLike'
import Images from '../components/images/Images'
import Loader from '../components/loader/Loader'

export default function GamesOnGenres({aboutGame}) {
  const {gamesOnGenrs} = useContext(MyContext)
  return (
    <>
    <h3>Games on genres</h3>
    <h5>Всего игр {gamesOnGenrs.length}</h5>
    <ul>
    {
      !gamesOnGenrs.length ? (<Loader/>) :
      gamesOnGenrs.map((el, i) => (
        <li key={el.name + el.id}> 
          <Link to={`/games/${el.id}`} onClick={()=> aboutGame(el)}>
            {el.name}
          </Link>
          <div className="images-game" style={{
            width: '50px',
            height: '50px'
          }}>

            <Images image ={el} />
          </div>
            <ButtonLike game ={el}/>
        </li>
        
      ))
    }
    </ul>

    </>
  )
}