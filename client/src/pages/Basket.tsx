import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/images/Images'
import ButtonLike from '../components/buttons/ButtonLike'
import ButtonRemove from '../components/buttons/ButtonRemove'
import { MyContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../store/types/store-types'
import { RemoveBasketAction } from '../store/actions'


export default function Basket({aboutGame}) {
  const dispatch = useDispatch()
  const {basket} = React.useContext(MyContext)
  // const { dataGames, basket, isAuth } = useSelector((data: IStore) => data);
  // const { basket } = useSelector((data:any) => data)
  console.log(basket)
  return (
    <>
      <h3>Basket</h3>
      <ul>
      {basket.map((el, i) => (
        <li key={el.name + el.id}>
          <Link to={`/games/${el.id}`} onClick={()=>aboutGame(basket[i])}>{el.name}</Link>
            <Image image = {el} />
            <ButtonRemove game = {el}/>
        </li>
      ))}
      </ul>

    </>
  )
}