import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBasket } from '../../store/api';

import './button-remove.scss';

export default function ButtonRemove({ game }:any) {
  const dispatch = useDispatch();

  return (
    <button className="remove-btn" type="button" onClick={() => dispatch(removeBasket(game))}>
      <span className="material-icons-outlined remove">delete</span>
    </button>
  );
}

// dispatch(UpdateBasketAction([...basket.splice(index, 1)]))
