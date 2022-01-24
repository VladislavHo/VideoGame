import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { gameOnGenres, getMainGames } from "../store/api";
import Image from "../components/images/Image";
import ButtonLike from "../components/button-like/ButtonLike";
import { MyContext } from "../App";

export default function Main({ limit, aboutGame }) {
  const dispatch = useDispatch();
  const {mainGames} = useContext(MyContext)
  const [numberActionGames, setNumberActionGame] = useState(0);

  // const [currentScreen, setCurrentScreen] = useState([])
  // const offset = 3
  // const lastScreenIndex = 1 * offset
  // const firstScreenIndex = lastScreenIndex - offset

  // new Promise(games).then((games) =>{
  //   console.log('ok')
  // })

  // const currentScreen = games[numberActionGames]?.screenshots.slice(firstScreenIndex, lastScreenIndex)
  // setCurrentScreen(games[numberActionGames]?.screenshots.slice(firstScreenIndex, lastScreenIndex))
  // const offsetImage = games[numberActionGames]?.screenshots.splice(1, 2)

  // console.log(offsetImage)
  return (
    <>
      <h3>Main</h3>
      <section className="main-game">
        <h3>{mainGames[numberActionGames]?.name}</h3>
        <ButtonLike game={mainGames[numberActionGames]} />
        <Link
          to={`/games/${mainGames[numberActionGames]?.id}`}
          onClick={() => aboutGame(mainGames[numberActionGames])}
        >
          {'About game'}
        </Link>
        <Image image={mainGames[numberActionGames]} size={"t_screenshot_med"} />
        <div className="small-screen">
          <ul>
            {/* {
              currentScreen.map((el, i) =>(
                <li key={el?.id + i}>
                <Image image ={games[numberActionGames]} index = {i} size ={'t_cover_big'} />
                </li>
              ))
            } */}
          </ul>
        </div>

        <ul>
          {mainGames.map((_, i) => (
            <li key={i} onClick={() => setNumberActionGame(i)}>
              0
            </li>
          ))}
        </ul>
      </section>

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
    </>
  );
}
