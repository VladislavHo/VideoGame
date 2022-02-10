import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import PopapUserForm from "./components/user-form/PopapUserForm";
import SearchGames from "./components/search-game/SearchGames";
import { useDispatch, useSelector } from "react-redux";
import AboutGame from "./pages/AboutGame";
import {
  getMainGames,
  gettingGenres,
  gettingPlatforms,
  gettingThemes,
} from "./store/api";
import Basket from "./pages/Basket";
import { IStore } from "./store/types/store-types";
import ShowImage from "./components/show-image/showImage";
import GenresPaginate from "./pages/genres/Genres";
import GamesOnGenresPaginate from "./pages/genres/GamesOnGenres";
import PaginateGames from "./pages/Games";
import GamesOnPlatformsPaginate from "./pages/platforms/GamesOnPlatforms";
import GamesOnThemesPaginate from "./pages/themes/GamesOnThemes";
import ThemesPaginate from "./pages/themes/Themes";
import PlatformsPaginate from "./pages/platforms/Platforms";
import "./style.scss";

export const MyContext: any = React.createContext(null);

export default function App() {
  const dispatch = useDispatch();
  const { dataGames, basket, isAuth } = useSelector((data: IStore) => data);
  const {
    searchGames,
    genres,
    gamesOnGenres,
    mainGames,
    themes,
    gamesOnThemes,
    platforms,
    gamesOnPlatforms,
  } = dataGames;
  console.log(dataGames)
  const [isOpenPopap, setIsOpenPopap] = useState({
    isUserForm: false,
    isGameForm: false,
    isShowImage: false,
  });
  const [basketLength, setBasketLength] = useState(basket.length);

  const [aboutGame, setAboutGame] = useState({});
  const [showImage, setShowImage] = useState({});

  const limit = {
    searchLimit: searchGames.slice(0, 3),
    genresLimit: genres.slice(0, 6),
    themesLimit: themes.slice(0, 6),
    platformsLimit: platforms.slice(0, 6),
  };
  const getAboutGame = (game) => setAboutGame(game);

  const isOpenUserForm = () =>
    setIsOpenPopap({ ...isOpenPopap, isUserForm: true });

  const isCloseUserForm = () =>
    setIsOpenPopap({ ...isOpenPopap, isUserForm: false });

  const isOpenShowImage = () =>
    setIsOpenPopap({ ...isOpenPopap, isShowImage: true });
  const isCloseShowImage = () =>
    setIsOpenPopap({ ...isOpenPopap, isShowImage: false });

  const isOpenSearchGames = () =>
    setIsOpenPopap({ ...isOpenPopap, isGameForm: true });
  const isCloseSearchGames = () =>
    setIsOpenPopap({ ...isOpenPopap, isGameForm: false });

  useEffect(() => {
    dispatch(getMainGames());
    dispatch(gettingGenres());
    dispatch(gettingThemes());
    dispatch(gettingPlatforms());
  }, []);

  useEffect(() => {
    setBasketLength(basket.length);
  }, [basket]);

  return (
    <>
      <MyContext.Provider
        value={{
          isAuth,
          searchGames,
          genres,
          gamesOnGenres,
          themes,
          gamesOnThemes,
          mainGames,
          basket,
          aboutGame,
          platforms,
          gamesOnPlatforms,
          platformsLimit: limit.platformsLimit,
          searchLimit: limit.searchLimit,
          genresLimit: limit.genresLimit,
          themesLimit: limit.themesLimit,
          itemsPerPage: 10,
          openForm: isOpenUserForm,
          closeSearch: isCloseSearchGames,
        }}
      >
        {isOpenPopap.isUserForm && <PopapUserForm isClose={isCloseUserForm} />}
        <Header
          isOpenUserForm={isOpenUserForm}
          isOpenSearchGames={isOpenSearchGames}
          length={basketLength}
        />
        {isOpenPopap.isGameForm && <SearchGames aboutGame={getAboutGame} />}
        {isOpenPopap.isShowImage && (
          <ShowImage img={showImage} close={isCloseShowImage} />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                aboutGame={getAboutGame}
                setImage={setShowImage}
                openImage={isOpenShowImage}
              />
            }
          />
          <Route
            path="/games"
            element={
              <PaginateGames aboutGame={getAboutGame} />
            }
          />

          <Route path="/games/:id" element={<AboutGame />} />
          <Route
            path="/genres"
            element={<GenresPaginate  />}
          />
          <Route
            path="/genres/:id"
            element={
              <GamesOnGenresPaginate
                aboutGame={getAboutGame}
              />
            }
          />
          <Route
            path="/themes"
            element={<ThemesPaginate />}
          />
          <Route
            path="/themes/:id"
            element={
              <GamesOnThemesPaginate
                aboutGame={getAboutGame}
              />
            }
          />

          <Route
            path="/platforms"
            element={<PlatformsPaginate />}
          />
          <Route
            path="/platforms/:id"
            element={
              <GamesOnPlatformsPaginate
                aboutGame={getAboutGame}
              />
            }
          />

          <Route path="/basket" element={<Basket aboutGame={getAboutGame} />} />

          <Route path="*" element={<h3>Not found...</h3>} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}
