import React, { useContext } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link} from "react-router-dom";
import { MyContext } from "../App";
import ButtonLike from '../components/button-like/ButtonLike'
import Image from '../components/images/Images'


export default function Games({  aboutGame }) {
  const {searchGames} = useContext(MyContext)


  return (
    <>
      <h3>Games</h3>
      <ul>
        {searchGames.map((el, i) => (
          <li key={el.id + el.name}>
            <Link to={`/games/${el.id}`} onClick={() => aboutGame(el)}>
              {el.name}
            </Link>
            <Image image ={el}/>
            <ButtonLike game ={el}/>
            
          </li>
        ))}
      </ul>
    </>
  );
}
// 