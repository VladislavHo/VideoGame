import React, { ReactElement, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { gameOnGenres, gameOnPlatforms, gameOnThemes } from '../store/api';
import Image from '../components/images/Images';
import ButtonLike from '../components/buttons/ButtonLike';
import Loader from '../components/loader/Loader';
import Rating from '../components/rating/Rating';
import { MyContext } from '../context';
import './main.scss';

interface IElemGame {
  slug: string | null;
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string | null;
}

interface IMain{
  aboutGame: (game: IElemGame) =>React.SetStateAction<any>
}

export default function Main({ aboutGame }: IMain): JSX.Element {
  const dispatch = useDispatch();

  const {
    mainGames, themesLimit, genresLimit, platformsLimit,
  } = useContext(MyContext);
  const [numberActionGames, setNumberActionGame] = useState(0);

  const offsetScreen = mainGames[numberActionGames]?.screenshots.slice(1, 4);

  return (
    <>
      <Outlet />
      <section className="main">
        <div className="main-game_screenshot">
          {!mainGames.length ? (
            <Loader />
          ) : (
            <div className="main_game-image">
              <Image
                image={mainGames[numberActionGames]}
                size="t_screenshot_med"
                index={0}
              />
              <Rating rating={mainGames[numberActionGames].rating} />
            </div>
          )}

          <div className="main_nav-game">
            {mainGames.map(
              (el: { id: number }, i: number): ReactElement => (
                <button
                  type="button"
                  key={el.id}
                  onClick={(): void => setNumberActionGame(i)}
                  aria-label="number game"
                />
              ),
            )}
          </div>
        </div>
        <div className="small-screen">
          <ul>
            <h3>{mainGames[numberActionGames]?.name}</h3>
            {offsetScreen
              && offsetScreen.map(
                (el: { id: string | null }, i: number): ReactElement => (
                  <li key={el.id}>
                    <Image
                      image={mainGames[numberActionGames]}
                      index={i + 1}
                      size="t_cover_big"
                    />
                  </li>
                ),
              )}
          </ul>
          <div className="main_control-card">
            <Link
              className="main-about_game"
              to={`/games/${mainGames[numberActionGames]?.id}`}
              onClick={() => aboutGame(mainGames[numberActionGames])}
            >
              About game
            </Link>
            <div className="btn-like_container">
              <ButtonLike game={mainGames[numberActionGames]} />
            </div>
          </div>
        </div>
      </section>

      <section className="genres">
        <h3>Genres</h3>
        <div className="genres-container">
          {genresLimit.length && (
            <>
              {genresLimit.map(
                (el: IElemGame): ReactElement => (
                  <Link
                    className="genre"
                    to={`genres/${el.slug}`}
                    key={el.name + el.id}
                    onClick={() => dispatch(gameOnGenres(el.id))}
                  >
                    {el.name}
                  </Link>
                ),
              )}
            </>
          )}
        </div>

        <Link to="/genres">
          <span>more</span>
        </Link>
      </section>
      <section className="themes">
        <h3>Themes</h3>
        <div className="themes-container">
          {themesLimit.length && (
            <>
              {themesLimit.map(
                (el: IElemGame): ReactElement => (
                  <Link
                    className="theme"
                    to={`themes/${el.slug}`}
                    key={el.name + el.id}
                    onClick={() => dispatch(gameOnThemes(el.id))}
                  >
                    {el.name}
                  </Link>
                ),
              )}
            </>
          )}
        </div>
        <Link to="/themes">
          <span>more</span>
        </Link>
      </section>
      <section className="platforms">
        <h3>Platforms</h3>
        <div className="platforms-container">
          {platformsLimit.map(
            (el: IElemGame): ReactElement => (
              <Link
                className="platform"
                to={`platforms/${el.slug}`}
                key={el.name + el.id}
                onClick={() => dispatch(gameOnPlatforms(el.id))}
              >
                {el.name}
              </Link>
            ),
          )}
        </div>

        <Link to="/platforms">
          <span>more</span>
        </Link>
      </section>
    </>
  );
}
