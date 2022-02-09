import React, { useContext } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { MyContext } from '../../App';
import {UpdateBasketAction} from '../../store/actions'
import { updateBasket } from '../../store/api';
import { IStore } from '../../store/types/store-types';

import './button-like.scss'

export default function ButtonLike({game}) {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((data:IStore) => data)
  const {openForm} = useContext(MyContext)

  console.log(isAuth)
  return (
    <button
    type="button"
    className='button-like'
    onClick={() => {
      !isAuth ? openForm() :
      dispatch(updateBasket(game))
    }}
  >
    Like
  </button>
  )
}





