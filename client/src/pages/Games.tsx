import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import ButtonLike from "../components/buttons/ButtonLike";
import Image from "../components/images/Images";
import ReactPaginate from "react-paginate";
import "./games.scss";
import Paginate from "../components/paginate/Paginate";
import Loader from "../components/loader/Loader";

function Games({ aboutGame, currentItems, length }) {
  return (
    <>
      <section className="games">
        <h3>Games</h3>
        <h5>Всего найденых игр: {length}</h5>
        <ul>
          {!currentItems ? <Loader/> :
            currentItems.map((el, i) => (
              <li key={el.id + el.name}>
                <Link to={`/games/${el.id}`} onClick={() => aboutGame(el)}>
                  {el.name}

                  <div className="game-images">
                    <Image image={el} />
                  </div>
                </Link>
                <div className="games_btn-like">
                  <ButtonLike game={el} />
                </div>
              </li>
            ))}
          {!length && (
            <h3>you don't have any games yet</h3>
          )}
        </ul>
      </section>
    </>
  );
}

export default function PaginateGames({ aboutGame }) {
  const { searchGames } = useContext(MyContext);
  return (
    <Paginate elements={searchGames} Component={Games} aboutGame={aboutGame} />
  );
}
//
