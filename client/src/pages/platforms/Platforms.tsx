import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { gameOnGenres, gameOnPlatforms } from "../../store/api";
import { MyContext } from "../../App";
import Loader from "../../components/loader/Loader";
import '../games.scss'
import ReactPaginate from "react-paginate";
import Paginate from "../../components/paginate/Paginate";

 function Platforms({currentItems, length}) {

  const dispatch = useDispatch();
  return (
    <>
    <section className="games">
    <h2>Platforms</h2>
      <h5>Всего жанров: {length}</h5>
      <ul>
        {currentItems && 
          currentItems.map((el, i) => (
            <li key={el.name + el.id}>
              <Link
                to={`/platforms/${el.slug}`}
                onClick={() => dispatch(gameOnPlatforms(el.id))}
              >
                {el.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </section>

    </>
  );
}

export default function PlatformsPaginate() {
  const { platforms } = useContext(MyContext);
  return (
    <Paginate elements={platforms} Component={Platforms} aboutGame ={null} />

  )
}