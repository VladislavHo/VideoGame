import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/images/Images'
import ButtonLike from '../components/button-like/ButtonLike'
import { MyContext } from '../App'


export default function Basket({aboutGame}) {
  const {basket} = React.useContext(MyContext)

  return (
    <>
      <h3>Basket</h3>
      <ul>
      {basket.map((el, i) => (
        <li key={el.name + el.id}>
          <Link to={`/games/${el.id}`} onClick={()=>aboutGame(basket[i])}>{el.name}</Link>
            <Image image = {el} size={''}/>
        </li>
      ))}
      </ul>

    </>
  )
}