import React from 'react'
import {useDispatch} from 'react-redux'
import {UpdateBasketAction} from '../../store/actions'


export default function ButtonLike({game}) {
  const dispatch = useDispatch();
  return (
    <button
    type="button"
    onClick={() => dispatch(UpdateBasketAction(game))}
  >
    Like
  </button>
  )
}





