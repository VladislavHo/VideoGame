import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { gameOnGenres } from "../../store/api";
import { MyContext } from "../../App";
import Loader from "../../components/loader/Loader";
import "../games.scss";
import ReactPaginate from "react-paginate";
import Paginate from "../../components/paginate/Paginate";

function Genres({ lenght, currentItems }) {
  const dispatch = useDispatch();
  return (
    <>
      <section className="games">
        <h5>All Genres: {lenght}</h5>
        <ul>
          {currentItems &&
            currentItems.map((el, i) => (
              <li key={el.name + el.id}>
                <Link
                  to={`/genres/${el.slug}`}
                  onClick={() => dispatch(gameOnGenres(el.id))}
                >
                  {el.name}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default function GenresPaginate() {
  const { genres } = useContext(MyContext);
  return <Paginate elements={genres} Component={Genres} aboutGame={null} />;
}
