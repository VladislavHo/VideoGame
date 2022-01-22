import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link} from "react-router-dom";
import ButtonLike from '../components/button-like/ButtonLike'
import Image from '../components/images/Image'


export default function Games({ games, aboutGame }) {
  const dispatch = useDispatch();
  const { searchGames } = useSelector((data: any) => data.dataGames);
  console.log(games)
  return (
    <>
      <h3>Games</h3>
      <ul>
        {games.map((el, i) => (
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