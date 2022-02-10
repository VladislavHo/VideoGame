import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import {MyContext} from '../../App'

import './paginate.scss'

export default function Paginate({ elements, Component, aboutGame}){
  const { itemsPerPage } =
    useContext(MyContext);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    console.log(elements);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(elements.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(elements.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, elements]);

  const handlePageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % elements.length;

    setItemOffset(newOffset);
  };

  return (
    <>
     <ReactPaginate
           previousLabel="<"
           nextLabel=">"
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item"
           previousLinkClassName="page-link"
           nextClassName="page-item"
           nextLinkClassName="page-link"
           breakLabel="..."
           breakClassName="page-item"
           breakLinkClassName="page-link"
           pageCount={pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={handlePageChange}
           containerClassName="pagination"
           activeClassName="active"
          //  forcePage={pageOffset}
     />
      <Component
        currentItems={currentItems}
        length={elements.length}
        aboutGame={aboutGame}
      />
      <ReactPaginate
           previousLabel="<"
           nextLabel=">"
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item"
           previousLinkClassName="page-link"
           nextClassName="page-item"
           nextLinkClassName="page-link"
           breakLabel="..."
           breakClassName="page-item"
           breakLinkClassName="page-link"
           pageCount={pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={handlePageChange}
           containerClassName="pagination"
           activeClassName="active"
          //  forcePage={pageOffset}
     />
     </>
  );
}