import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {UpdateBasketAction} from '../../store/actions'
import { updateBasket } from '../../store/api';


export default function ButtonLike({game}) {
  const dispatch = useDispatch();

  return (
    <button
    type="button"
    onClick={() => {
      dispatch(updateBasket(game))
    }}
  >
    Like
  </button>
  )
}





