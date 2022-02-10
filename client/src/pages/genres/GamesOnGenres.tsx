import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import Paginate from '../../components/paginate/Paginate'
import ButtonLike from "../../components/buttons/ButtonLike";
import Images from "../../components/images/Images";
import Loader from "../../components/loader/Loader";

import "../games.scss";
function GamesOnGenres({ aboutGame, currentItems, length }) {
  useEffect(()=>{
    console.log(currentItems)
    console.log(length)
  }, [currentItems, length])
  return (
    <>
      <section className="games">
        <h5>All Games: {length}</h5>
        
        <ul>
          {!currentItems ? <Loader/> :
            currentItems.map((el, i) => (
              <li key={el.name + el.id}>
                <Link to={`/games/${el.id}`} onClick={() => aboutGame(el)}>
                  {el.name}

                  <div className="game-images">
                    <Images image={el} />
                  </div>
                </Link>
                <div className="games-btn-like">
                  <ButtonLike game={el} />
                </div>
              </li>
            ))
          }
          {!length && (<h3>games whose rating is higher than 40 were not found</h3>)}
        </ul>
      </section>
    </>
  );
}

export default function GamesOnGenresPaginate({ aboutGame }) {
  const { gamesOnGenres } = useContext(MyContext);
  return (
    <Paginate elements={gamesOnGenres} Component={GamesOnGenres} aboutGame={aboutGame}/>
  )
}
