import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGames } from "../../../store/api";
import "./search.scss";

export default function Search({ isOpen }) {
  const dispatch = useDispatch();
  const [searchGame, setSearchGame] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(searchGame.length > 2) {
      dispatch(searchGames(searchGame));
      isOpen();
    }

  };

  return (
    <div className="search-container">
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="search">
        <input
          className="search-form"
          name={searchGame}
          value={searchGame}
          type="text"
          placeholder="Search Game ..."
          onChange={(e) => setSearchGame(e.target.value)}
        />

        <button className="search-btn">
          <span className="material-icons-outlined">search</span>
        </button>
      </label>
    </form>
    </div>

  );
}
