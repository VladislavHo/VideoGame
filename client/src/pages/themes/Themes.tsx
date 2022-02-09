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

export default function ThemesPaginate({ itemsPerPage }) {
  const { themes } = useContext(MyContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(themes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(themes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % themes.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Themes
        currentItems={currentItems}
        length={themes.length}
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