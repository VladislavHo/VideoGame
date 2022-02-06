import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {UpdateBasketAction} from '../../store/actions'
import { updateBasketAction } from '../../store/api';


export default function ButtonLike({game}) {
  const dispatch = useDispatch();
  const {firstName} = useSelector((data:any) => data.user)
  console.log(firstName)
  return (
    <button
    type="button"
    onClick={() => {
      // dispatch(UpdateBasketAction(game))
      dispatch(updateBasketAction(game))
    }}
  >
    Like
  </button>
  )
}





