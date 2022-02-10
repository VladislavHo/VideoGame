import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';
import Paginate from '../../components/paginate/Paginate';
import ButtonLike from '../../components/buttons/ButtonLike';
import Images from '../../components/images/Images';
import Loader from '../../components/loader/Loader';

import '../games.scss';

interface ICurrentItems {
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string | null;
  slug: string | null;
}

interface IGamesOnGenres{
  currentItems: ICurrentItems[]
  length: number | null
  aboutGame: (game: ICurrentItems) =>React.SetStateAction<any>
}

function GamesOnGenres({ aboutGame, currentItems, length }:IGamesOnGenres) {
  return (
    <section className="games">
      <h5>
        All Games:
        {length}
      </h5>

      <ul>
        {!currentItems ? <Loader />
          : currentItems.map((el:ICurrentItems) => (
            <li key={el.name + el.id}>
              <Link to={`/games/${el.id}`} onClick={() => aboutGame(el)}>
                {el.name}

                <div className="game-images">
                  <Images image={el} index={0} size="t_thumb" />
                </div>
              </Link>
              <div className="games_btn-like">
                <ButtonLike game={el} />
              </div>
            </li>
          ))}
        {!length && (<h3>games whose rating is higher than 40 were not found</h3>)}
      </ul>
    </section>
  );
}

export default function GamesOnGenresPaginate({ aboutGame }:any) {
  const { gamesOnGenres } = useContext(MyContext);
  return (
    <Paginate elements={gamesOnGenres} Component={GamesOnGenres} aboutGame={aboutGame} />
  );
}
