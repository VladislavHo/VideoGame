import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import ButtonLike from "../../components/buttons/ButtonLike";
import Images from "../../components/images/Images";
import Loader from "../../components/loader/Loader";

import "../games.scss";
function GamesOnGenres({ aboutGame, currentItems, length }) {
  useEffect(()=>{
    console.log(currentItems)
  }, [currentItems])
  return (
    <>
      <section className="games">
        <h5>All Games: {length}</h5>
        <ul>
          {currentItems &&
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
        </ul>
      </section>
    </>
  );
}

export default function GamesOnGenresPaginate({ aboutGame, itemsPerPage }) {
  const { gamesOnGenres } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(gamesOnGenres.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(gamesOnGenres.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gamesOnGenres.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      <GamesOnGenres
        aboutGame={aboutGame}
        currentItems={currentItems}
        length={gamesOnGenres.length}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
