import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { gameOnGenres } from "../store/api";
import Image from '../components/images/Images'
import ButtonLike from '../components/button-like/ButtonLike'
import { MyContext } from "../App";


export default function Genres() {
  const {genres} = useContext(MyContext)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Genres</h2>
      <ul>
        {genres.map((el, i) => (
          <li key={el.name + el.id}>
          <Link to={`/genres/${el.slug}`} onClick={()=> dispatch(gameOnGenres(el.id))}>
            {el.name}
          </Link>

        </li>
        ))}
      </ul>
    </>
  );
}

//   {genres.length && (
//   genres.map((el, i) => {
//     <li key={el.slug + el.id}>
//       <Link  to={`/genres/${el.slug}`}>{el.name}</Link>
//     </li>;
//   })
// )}
