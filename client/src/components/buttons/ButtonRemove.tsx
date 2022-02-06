import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveBasketAction, UpdateBasketAction } from '../../store/actions'

export default function ButtonRemove({id}) {
  const dispatch = useDispatch()

  return (
    <button onClick={()=> dispatch(RemoveBasketAction(id))}>
      Remove
    </button>
  )
}

// dispatch(UpdateBasketAction([...basket.splice(index, 1)]))