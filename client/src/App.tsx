import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Games from "./pages/Games";
import PopapUserForm from "./components/user-form/PopapUserForm";
import SearchGames from "./components/search-game/SearchGames";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import AboutGame from "./components/about-game/AboutGame";
import { getMainGames, gettingGenres } from "./store/api";
import Genres from "./pages/Genres";
import GamesOnGenres from "./pages/GamesOnGenres";
import Basket from "./pages/Basket";
import { dataGames } from "./store/initialStore";

export const MyContext: any = React.createContext(null);

export default function App() {
  const dispatch = useDispatch();
  const { dataGames, basket } = useSelector((data: any) => data);
  const { searchGames, genres, gamesOnGenrs, mainGames } = dataGames;

  const [isOpenPopap, setIsOpenPopap] = useState({
    isUserForm: false,
    isGameForm: false,
  });
  const [aboutGame, setAboutGame] = useState({});

  const limit = {
    searchLimit: searchGames.slice(0, 3),
    genresLimit: genres.slice(0, 6),
  };

  const getAboutGame = (game) => setAboutGame(game);

  const isOpenUserForm = () =>
    setIsOpenPopap({ ...isOpenPopap, isUserForm: true });
  const isCloseUserForm = () =>
    setIsOpenPopap({ ...isOpenPopap, isUserForm: false });

  const isOpenSearchGames = () =>
    setIsOpenPopap({ ...isOpenPopap, isGameForm: true });
  const isCloseSearchGames = () =>
    setIsOpenPopap({ ...isOpenPopap, isGameForm: false });

  useEffect(() => {
    dispatch(getMainGames());
    dispatch(gettingGenres());
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider
          value={{
            searchGames,
            genres,
            gamesOnGenrs,
            mainGames,
            basket,
            aboutGame,
            searchLimt: limit.searchLimit,
            genresLimit: limit.genresLimit
          }}
        >
          {isOpenPopap.isUserForm && (
            <PopapUserForm isClose={isCloseUserForm} />
          )}
          <Header
            isOpenUserForm={isOpenUserForm}
            isOpenSearchGames={isOpenSearchGames}
          />
          {isOpenPopap.isGameForm && (
            <SearchGames
              isCloseSearchGames={isCloseSearchGames}
              aboutGame={getAboutGame}
            />
          )}
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  limit={limit.genresLimit}
                  aboutGame={getAboutGame}
                />
              }
            />
            <Route
              path="/games"
              element={<Games aboutGame={getAboutGame} />}
            />

            <Route path="/games/:id" element={<AboutGame />} />
            <Route path="/genres" element={<Genres />} />
            <Route
              path="/genres/:id"
              element={
                <GamesOnGenres aboutGame={getAboutGame} />
              }
            />

            <Route
              path="/basket"
              element={<Basket aboutGame={getAboutGame} />}
            />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}
