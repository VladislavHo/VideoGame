import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveBasketAction, UpdateBasketAction } from '../../store/actions'
import { removeBasket } from '../../store/api'

export default function ButtonRemove({game}) {
  const dispatch = useDispatch()

  return (
    <button onClick={()=> dispatch(removeBasket(game))}>
      Remove
    </button>
  )
}

// dispatch(UpdateBasketAction([...basket.splice(index, 1)]))