import React, { useContext } from "react";
import { MyContext } from "../App";
import ButtonLike from "../components/buttons/ButtonLike";
import NoImage from "../components/no-image/NoImage";
import Rating from "../components/rating/Rating";

import "./about-game.scss";
import { useDispatch } from "react-redux";
import { gameOnGenres, gameOnPlatforms, gameOnThemes } from "../store/api";
import { Link } from "react-router-dom";

export default function AboutGame() {
  const dispatch = useDispatch();
  const { aboutGame } = useContext(MyContext);
  const sizeImage = !aboutGame.cover
    ? null
    : aboutGame.cover.url.replace(/t_thumb/, "t_cover_big");

  function dataRealese(unix: number) {
    const data = new Date(unix * 1000);
    const year = data.getFullYear();
    const month = data.getMonth();
    const day = data.getDay();
    return `${day}.${month}.${year}`;
  }

  console.log(aboutGame);
  return (
    <>
    {aboutGame.screenshots && <img className="background-game" src= {aboutGame.screenshots[0].url} alt="background" />}
      <section className="about-game">
        <div className="about-game_basic-info">
          <div className="about-game_basic-info_main-screen">
            {!sizeImage ? (
              <NoImage />
            ) : (
              <img style={{ height: `${364}px` }} src={sizeImage} alt="" />
            )}
            <Rating rating={aboutGame.rating} />
            <ButtonLike game={aboutGame} />
          </div>
          <div className="info-game">
            <h3>{aboutGame.name}</h3>
            <ul>
              <li>Date of release: {aboutGame.first_release_date && dataRealese(aboutGame.first_release_date)}</li>
              <li>
                <ul>
                  Comapony:{" "}
                  {aboutGame.involved_companies && aboutGame.involved_companies.map((el) => (
                    <li>{el.id}</li>
                  ))}
                </ul>
              </li>
              <li>
                Platforsms:
                {aboutGame.platforms && aboutGame.platforms.map((el, i) => (
                  <Link
                    to={`/platforms/${el.abbreviation}`}
                    onClick={() => dispatch(gameOnPlatforms(el.id))}
                  >
                    {el.abbreviation}
                  </Link>
                ))}
              </li>
              <li>
                Genres :
                {aboutGame.genres && aboutGame.genres.map((el, i) => (
                  <Link
                    to={`/genres/${el.slug}`}
                    onClick={() => dispatch(gameOnGenres(el.id))}
                  >
                    {el.name}
                  </Link>
                ))}
              </li>
              <li>
                Themes:
                {aboutGame.themes && aboutGame.themes.map((el, i) => (
                  <Link
                    to={`/themes/${el.slug}`}
                    onClick={() => dispatch(gameOnThemes(el.id))}
                  >
                    {el.name}
                  </Link>
                ))}
              </li>
              <li>
                 <p className="summary">{aboutGame.summary && aboutGame.summary}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="storyline">{aboutGame.storyline && aboutGame.storyline}</div>

        <div className="screenshots-game">
          <ul>
            {aboutGame?.screenshots && aboutGame?.screenshots.map((el, i) => (
              <li key={el.image_id + el.id}>
                <img src={el?.url} alt={el.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="video"></div>
      </section>
    </>
  );
}
