import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';
import Images from '../images/Images';
import Loader from '../loader/Loader';

import './search-game.scss';

interface ISearchGame {
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string;
}

export default function SearchGames({ aboutGame }: any) {
  const { searchLimit, closeSearch } = useContext(MyContext);

  const handleClickLinks = (game: any): void => {
    closeSearch();
    aboutGame(game);
  };

  return (
    <div className="search-game">
      <div className="search-wrapper">
        <button type="button" onClick={closeSearch}>
          <span className="material-icons-outlined close">
            close
          </span>
        </button>

        <ul>
          {!searchLimit.length ? (
            <Loader />
          ) : (
            searchLimit.map((el: ISearchGame, i: string | number) => (
              <li key={el.name + el.id}>
                <Link
                  to={`/games/${el.id}`}
                  onClick={() => handleClickLinks(searchLimit[i])}
                >
                  {el.name}
                </Link>
                <div
                  className="search-image"
                  style={{
                    width: '20px',
                    height: '20px',
                  }}
                >
                  <Images image={el} index={0} size="t_thumb" />
                </div>
              </li>
            ))
          )}
          <Link to="/games" onClick={closeSearch}>
            More...
          </Link>
        </ul>
      </div>
    </div>
  );
}
