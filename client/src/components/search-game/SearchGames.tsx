import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'
import Images from '../images/Images'
import Loader from '../loader/Loader'

export default function SearchGames({isCloseSearchGames, aboutGame}) {
  const {searchLimt} = useContext(MyContext)


  const handleClickLinks = (game) =>{
    isCloseSearchGames()
    aboutGame(game)
    console.log(game)
  }

  return (
    <>
    <h3 onClick={isCloseSearchGames}>Search Games</h3>
    <ul>
    {!searchLimt.length ? (<Loader/>) : searchLimt.map((el, i) => (
      <li key={el.name + el.id}>
        <Link to={`/games/${el.id}`} onClick={()=> handleClickLinks(searchLimt[i])}>{el.name}</Link>
        <div className="search-image" style={{
          width: '20px',
          height: '20px'
        }}>
        <Images image ={el} />

        </div>
      </li>
      ))}
      <Link to='/games' onClick={isCloseSearchGames}>More...</Link>
    </ul>

    </>
  )
}