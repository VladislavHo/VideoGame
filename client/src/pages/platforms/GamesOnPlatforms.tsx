import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import ButtonLike from "../../components/buttons/ButtonLike";
import Images from "../../components/images/Images";
import Loader from "../../components/loader/Loader";
import ReactPaginate from "react-paginate";

import "../games.scss";

function GamesOnPlatforms({ aboutGame, currentItems, length }) {
  return (
    <>
      <section className="games">
        <h3>Games on platforms</h3>
        <h5>Всего игр {length}</h5>
        <ul>
          {currentItems &&
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
        </ul>
      </section>
    </>
  );
}

export default function GamesOnPlatformsPaginate({ itemsPerPage, aboutGame }) {
  const { gamesOnPlatforms } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(gamesOnPlatforms.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(gamesOnPlatforms.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gamesOnPlatforms.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <GamesOnPlatforms
        currentItems={currentItems}
        length={gamesOnPlatforms.length}
        aboutGame={aboutGame}
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
