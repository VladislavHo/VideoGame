import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import ButtonLike from "../../components/buttons/ButtonLike";
import Images from "../../components/images/Images";
import Loader from "../../components/loader/Loader";
import "../games.scss";
function GamesOnThemes({ currentItems, length, aboutGame }) {
  return (
    <>
      <section className="games">
        <h3>Games on themes</h3>
        <h5>Всего игр {length}</h5>
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

export default function GamesOnThemesPaginate({ itemsPerPage, aboutGame }) {
  const { gamesOnThemes } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(gamesOnThemes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(gamesOnThemes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gamesOnThemes.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <GamesOnThemes
        currentItems={currentItems}
        length={gamesOnThemes.length}
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
