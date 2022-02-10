import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { gameOnGenres } from "../../store/api";
import Image from "../../components/images/Images";
import ButtonLike from "../../components/buttons/ButtonLike";
import { MyContext } from "../../App";
import Loader from "../../components/loader/Loader";
import '../games.scss'
import ReactPaginate from "react-paginate";
import Paginate from "../../components/paginate/Paginate";
function Themes({currentItems, length}) {

  const dispatch = useDispatch();
  return (
    <>
    <section className="games">
    <h2>Themes</h2>
      <h5>Всего тем: {length}</h5>
      <ul>
        {currentItems && (
          <Loader />
        ) && (
          currentItems.map((el, i) => (
            <li key={el.name + el.id}>
              <Link
                to={`/genres/${el.slug}`}
                onClick={() => dispatch(gameOnGenres(el.id))}
              >
                {el.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>

    </>
  );
}

export default function ThemesPaginate() {
  const { themes } = useContext(MyContext);
  return (
    <Paginate elements={themes} Component={Themes} aboutGame ={null} />

  )
}