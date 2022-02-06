import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { gameOnGenres, getMainGames } from "../store/api";
import Image from "../components/images/Images";
import ButtonLike from "../components/buttons/ButtonLike";
import { MyContext } from "../App";
import "./main.scss";

export default function Main({ limit, aboutGame, setImage, openImage }) {
  const dispatch = useDispatch();
  const { mainGames } = useContext(MyContext);
  const [numberActionGames, setNumberActionGame] = useState(0);

  const offsetScreen = mainGames[numberActionGames]?.screenshots.slice(1, 4);

  return (
    <>
      <Outlet />
      <section className="main">
        <div className="main-game_screenshot">
          <div className="main_game-image">
          <Image
            image={mainGames[numberActionGames]}
            size={"t_screenshot_med"}
          />
          </div>

          <div className="main_nav-game">
            {mainGames.map((_, i) => (
                <span key={i} onClick={() => setNumberActionGame(i)}></span>
      
            ))}
          </div>
        </div>

        <div className="small-screen">

          <ul>
          <h3>{mainGames[numberActionGames]?.name}</h3>
            {offsetScreen &&
              offsetScreen.map((el, i) => (
                <>
                  <li
                    key={el.id + i}
                    onClick={() => {
                      openImage();
                      setImage(mainGames[numberActionGames]?.screenshots);
                    }}
                  >
                    <Image
                      image={mainGames[numberActionGames]}
                      index={i + 1}
                      size={"t_cover_big"}
                    />
                  </li>
                </>
              ))}

          </ul>
          <div className="main_control-card">
              
              <Link
                className="main-about_game"
                to={`/games/${mainGames[numberActionGames]?.id}`}
                onClick={() => aboutGame(mainGames[numberActionGames])}
              >
                {"About game"}
              </Link>
              <ButtonLike game={mainGames[numberActionGames]} />
          </div>
        </div>
      </section>
      <section className="genres">
        {limit.length && (
          <ul>
            {limit.map((el, i) => (
              <li key={el.name + el.id}>
                <Link
                  to={`genres/${el.slug}`}
                  onClick={() => dispatch(gameOnGenres(el.id))}
                >
                  {el.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/genres">More...</Link>
            </li>
          </ul>
        )}
      </section>
    </>
  );
}
