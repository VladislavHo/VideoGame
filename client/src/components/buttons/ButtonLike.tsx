import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyContext } from '../../context';
import { updateBasket } from '../../store/api';
import { IStore } from '../../store/types/store-types';

import './button-like.scss';

export default function ButtonLike({ game }:any) {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((data:IStore) => data);
  const { openForm } = useContext(MyContext);

  function handleClick() {
    if (!isAuth) {
      openForm();
    } else {
      dispatch(updateBasket(game));
    }
  }

  return (
    <button
      type="button"
      className="button-like"
      onClick={handleClick}
    >
      Like
    </button>
  );
}
