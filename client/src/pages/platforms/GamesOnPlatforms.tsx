import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import ButtonLike from "../../components/buttons/ButtonLike";
import Images from "../../components/images/Images";
import Loader from "../../components/loader/Loader";
import ReactPaginate from "react-paginate";

import "../games.scss";
import Paginate from "../../components/paginate/Paginate";

function GamesOnPlatforms({ aboutGame, currentItems, length }) {
  return (
    <>
      <section className="games">
        <h5>Всего игр {length}</h5>
        <ul>
          {!currentItems ? <Loader/> :
            currentItems.map((el, i) => (
              <li key={el.name + el.id + i}>
                <Link to={`/games/${el.id}`} onClick={() => aboutGame(el)}>
                  {el.name}
                  <div className="game-images">
                    <Images image={el} />
                  </div>
                </Link>
                <div className="games_btn-like">
                  <ButtonLike game={el} />
                </div>
              </li>
            ))}
            {!length && (<h3>games whose rating is higher than 40 were not found</h3>)}
        </ul>
      </section>
    </>
  );
}

export default function GamesOnPlatformsPaginate({ aboutGame }) {
  const { gamesOnPlatforms } = useContext(MyContext);

  return (
    <Paginate elements={gamesOnPlatforms} Component={GamesOnPlatforms} aboutGame={aboutGame}/>

  )
}
