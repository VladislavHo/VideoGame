import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { gameOnGenres, gameOnPlatforms } from "../../store/api";
import { MyContext } from "../../App";
import Loader from "../../components/loader/Loader";
import '../games.scss'
import ReactPaginate from "react-paginate";

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
                to={`/platforms/${el.abbreviation}`}
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

export default function PlatformsPaginate({ itemsPerPage }) {
  const { platforms } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(platforms.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(platforms.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % platforms.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Platforms
        currentItems={currentItems}
        length={platforms.length}

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