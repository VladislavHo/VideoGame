import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { gameOnGenres } from "../../store/api";
import { MyContext } from "../../App";
import Loader from "../../components/loader/Loader";
import "../games.scss";
import ReactPaginate from "react-paginate";

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
            ))
          }
        </ul>
      </section>
    </>
  );
}

export default function GenresPaginate({ itemsPerPage }) {
  const { genres } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(genres.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(genres.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % genres.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Genres currentItems={currentItems} lenght ={genres.lenght}/>
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
