import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'
import Image from '../images/Image'

export default function SearchGames({isCloseSearchGames, aboutGame}) {
  const {searchLimt} = useContext(MyContext)


  const handleClickLinks = (game) =>{
    isCloseSearchGames()
    aboutGame(game)
  }

  return (
    <>
    <h3 onClick={isCloseSearchGames}>Search Games</h3>
    <ul>
    {searchLimt.map((el, i) => (
      <li key={el.name + el.id}>
        <Link to={`/games/${el.id}`} onClick={()=> handleClickLinks(searchLimt[i])}>{el.name}</Link>
        <Image image ={el}/>
      </li>
      ))}
      <Link to='/games' onClick={isCloseSearchGames}>More...</Link>
    </ul>

    </>
  )
}