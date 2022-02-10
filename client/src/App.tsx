import React, { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Main from './pages/Main';
import PopapUserForm from './components/user-form/PopapUserForm';
import SearchGames from './components/search-game/SearchGames';
import AboutGame from './pages/AboutGame';
import {
  getMainGames,
  gettingGenres,
  gettingPlatforms,
  gettingThemes,
} from './store/api';
import Basket from './pages/Basket';
import { IStore } from './store/types/store-types';
import GenresPaginate from './pages/genres/Genres';
import GamesOnGenresPaginate from './pages/genres/GamesOnGenres';
import PaginateGames from './pages/Games';
import GamesOnPlatformsPaginate from './pages/platforms/GamesOnPlatforms';
import GamesOnThemesPaginate from './pages/themes/GamesOnThemes';
import ThemesPaginate from './pages/themes/Themes';
import PlatformsPaginate from './pages/platforms/Platforms';
import { MyContext } from './context';
import './style.scss';

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
  const [isOpenPopap, setIsOpenPopap] = useState({
    isUserForm: false,
    isGameForm: false,
    isShowImage: false,
  });
  const [basketLength, setBasketLength] = useState(basket.length);

  const [aboutGame, setAboutGame] = useState({});

  const limit: any = {
    searchLimit: searchGames.slice(0, 3),
    genresLimit: genres.slice(0, 6),
    themesLimit: themes.slice(0, 6),
    platformsLimit: platforms.slice(0, 6),
  };
  const getAboutGame = (game: React.SetStateAction<any>): void => setAboutGame(game);

  const isOpenUserForm = (): void => setIsOpenPopap({ ...isOpenPopap, isUserForm: true });

  const isCloseUserForm = (): void => setIsOpenPopap({ ...isOpenPopap, isUserForm: false });

  const isOpenSearchGames = (): void => setIsOpenPopap({ ...isOpenPopap, isGameForm: true });
  const isCloseSearchGames = (): void => setIsOpenPopap({ ...isOpenPopap, isGameForm: false });

  useEffect(() => {
    dispatch(gettingGenres());
    dispatch(gettingThemes());
    dispatch(gettingPlatforms());
  }, []);

  useEffect(() => {
    dispatch(getMainGames());
  }, [false]);

  useEffect(() => {
    setBasketLength(basket.length);
  }, [basket]);

  const dataContaxt: any = {
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
  };

  const memoizedContext = useMemo(() => dataContaxt, [dataContaxt]);

  return (
    <MyContext.Provider value={memoizedContext}>
      {isOpenPopap.isUserForm && <PopapUserForm isClose={isCloseUserForm} />}
      <Header
        isOpenUserForm={isOpenUserForm}
        isOpenSearchGames={isOpenSearchGames}
        length={basketLength}
      />
      {isOpenPopap.isGameForm && <SearchGames aboutGame={getAboutGame} />}
      <Routes>
        <Route path="/" element={<Main aboutGame={getAboutGame} />} />
        <Route
          path="/games"
          element={<PaginateGames aboutGame={getAboutGame} />}
        />

        <Route path="/games/:id" element={<AboutGame />} />
        <Route path="/genres" element={<GenresPaginate />} />
        <Route
          path="/genres/:id"
          element={<GamesOnGenresPaginate aboutGame={getAboutGame} />}
        />
        <Route path="/themes" element={<ThemesPaginate />} />
        <Route
          path="/themes/:id"
          element={<GamesOnThemesPaginate aboutGame={getAboutGame} />}
        />

        <Route path="/platforms" element={<PlatformsPaginate />} />
        <Route
          path="/platforms/:id"
          element={<GamesOnPlatformsPaginate aboutGame={getAboutGame} />}
        />

        <Route path="/basket" element={<Basket aboutGame={getAboutGame} />} />

        <Route path="/*" element={<h3>Not found...</h3>} />
      </Routes>
    </MyContext.Provider>
  );
}
