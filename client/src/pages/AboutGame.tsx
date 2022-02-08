import React, { useContext } from "react";
import { MyContext } from "../App";
import ButtonLike from "../components/buttons/ButtonLike";
import NoImage from "../components/no-image/NoImage";
import Rating from "../components/rating/Rating";

import "./about-game.scss";
import Images from "../components/images/Images";

export default function AboutGame() {
  const { aboutGame } = useContext(MyContext);
  const sizeImage = !aboutGame.cover
    ? null
    : aboutGame.cover.url.replace(/t_thumb/, "t_screenshot_med");
  console.log(aboutGame.screenshots);
  return (
    <>
      <section className="about-game">
        <div className="about-game_basic-info">
          <div className="about-game_basic-info_main-screen">
            {/* <Image image={aboutGame} size={"t_screenshot_med"}/> */}
            {!sizeImage ? <NoImage/> : <img src={sizeImage} alt="" />}
            <Rating rating={aboutGame.rating} />
            <ButtonLike game={aboutGame} />
          </div>
          <div className="info-game">
            <h3>{aboutGame.name}</h3>
            <ul>
                  <li>Year:</li>
              <li>
                <ul>
                Comapony: {
                  // aboutGame.involved_companies.map((el)=> (
                  //   <li>{el.name}</li>
                  // ))
                }
                </ul>

              </li>
              <li>Genres</li>
            </ul>
          </div>
        </div>
        <div className="storyline">
          {aboutGame.storyline}
        </div>
        <div className="summary">
          {aboutGame.summary}
        </div>
        <div className="screenshots-game">
          <ul>
          {
            aboutGame?.screenshots.map((el, i) => (
              <li key={el.image_id + el.id}>
                <img src={el?.url} alt="" />
              </li>
            ))
          }
          </ul>

        </div>
        <div className="video">
          
        </div>
      </section>

    </>
  );
}
