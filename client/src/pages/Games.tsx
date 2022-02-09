import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import ButtonLike from "../components/buttons/ButtonLike";
import Image from "../components/images/Images";
import ReactPaginate from "react-paginate";
import "./games.scss";
function Games({ aboutGame, currentItems, length }) {
  return (
    <>
      <section className="games">
        <h3>Games</h3>
        <h5>Всего найденых игр: {length}</h5>
        <ul>
          {currentItems &&
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
        </ul>
      </section>
    </>
  );
}

export default function PaginateGames({ aboutGame, itemsPerPage }) {
  const { searchGames } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchGames.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchGames.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchGames.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      <Games
        aboutGame={aboutGame}
        currentItems={currentItems}
        length={searchGames.length}
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
//
