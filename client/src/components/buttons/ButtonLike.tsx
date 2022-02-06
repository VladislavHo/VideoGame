import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {UpdateBasketAction} from '../../store/actions'
import { updateBasket } from '../../store/api';

import './button-like.scss'

export default function ButtonLike({game}) {
  const dispatch = useDispatch();

  return (
    <button
    type="button"
    className='button-like'
    onClick={() => {
      dispatch(updateBasket(game))
    }}
  >
    Like
  </button>
  )
}





