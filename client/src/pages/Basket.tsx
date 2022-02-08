import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/images/Images";
import ButtonRemove from "../components/buttons/ButtonRemove";
import { MyContext } from "../App";
import { useDispatch, useSelector } from "react-redux";

import './basket.scss'

export default function Basket({ aboutGame }) {
  const { basket } = React.useContext(MyContext);
  return (
    <div className="basket">
    <h3>Basket</h3>
      <ul>
        {basket.map((el, i) => (
          <li key={el.name + el.id}>
            <Link to={`/games/${el.id}`} onClick={() => aboutGame(basket[i])}>
              {el.name}
            </Link>
            <div className="basket_screen-game">
              <Image image={el} />
            </div>
            <ButtonRemove game={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}
