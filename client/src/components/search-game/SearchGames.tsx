import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import Images from "../images/Images";
import Loader from "../loader/Loader";

import "./search-game.scss";
export default function SearchGames({ aboutGame }) {
  const { searchLimit, closeSearch } = useContext(MyContext);

  const handleClickLinks = (game) => {
    closeSearch();
    aboutGame(game);
  };

  return (
    <>
      <div className="search-game">
        <div className="search-wrapper">
          <span
            className="material-icons-outlined close"
            onClick={closeSearch}
          >
            close
          </span>
          <ul>
            {!searchLimit.length ? (
              <Loader />
            ) : (
              searchLimit.map((el, i) => (
                <li key={el.name + el.id}>
                  <Link
                    to={`/games/${el.id}`}
                    onClick={() => handleClickLinks(searchLimit[i])}
                  >
                    {el.name}
                  </Link>
                  <div
                    className="search-image"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    <Images image={el} />
                  </div>
                </li>
              ))
            )}
            <Link to="/games" onClick={closeSearch}>
              More...
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
