import React, {
  useContext,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { gameOnGenres, getMainGames } from "../store/api";
import Image from "../components/images/Images";
import ButtonLike from "../components/buttons/ButtonLike";
import Loader from "../components/loader/Loader";
import Rating from '../components/rating/Rating'
import { MyContext } from "../App";
import "./main.scss";

export default function Main({ limit, aboutGame, setImage, openImage }) {
  const dispatch = useDispatch();
  const activeGameRef = useRef(null);
  const { mainGames } = useContext(MyContext);

  // const listActiveGameRef = useMemo(() => mainGames.map(() => activeGameRef), [])
  const [numberActionGames, setNumberActionGame] = useState(0);

  const offsetScreen = mainGames[numberActionGames]?.screenshots.slice(1, 4);

  const activeGame = (e) => {
    if (e.target.tagName == "SPAN") {
      e.target.classList.add("active_nav-game");
    }
  };

  console.log(activeGameRef);
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
                size={"t_screenshot_med"}
              />
              <Rating rating = {mainGames[numberActionGames].rating}/>
            </div>
          )}

          <div className="main_nav-game" onClick={(e) => activeGame(e)}>
            {mainGames.map((_, i) => (
              <span
                // ref={activeGameRef}
                key={i}
                onClick={(e) => setNumberActionGame(i)}
              ></span>
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
                    {
                      <Image
                        image={mainGames[numberActionGames]}
                        index={i + 1}
                        size={"t_cover_big"}
                      />
                    }
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
          <>
            {limit.map((el, i) => (
              <Link
                className="genre"
                to={`genres/${el.slug}`}
                key={el.name + el.id}
                onClick={() => dispatch(gameOnGenres(el.id))}
              >
                {el.name}
              </Link>
            ))}
            {/* <div>
              <Link to="/genres">More...</Link>
            </div> */}
          </>
        )}
      </section>
    </>
  );
}
