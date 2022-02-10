import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context';
import ButtonLike from '../components/buttons/ButtonLike';
import Image from '../components/images/Images';
import './games.scss';
import Paginate from '../components/paginate/Paginate';
import Loader from '../components/loader/Loader';

interface ICurrentItems {
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string | null;
  slug: string | null;
}

interface IGenres{
  currentItems: ICurrentItems[]
  length: number | null
  aboutGame: (game: ICurrentItems) =>React.SetStateAction<any>
}

function Games({ aboutGame, currentItems, length }:IGenres) {
  return (
    <section className="games">
      <h3>Games</h3>
      <h5>
        Всего найденых игр:
        {length}
      </h5>
      <ul>
        {!currentItems ? <Loader />
          : currentItems.map((el:ICurrentItems) => (
            <li key={el.id + el.name}>
              <Link to={`/games/${el.id}`} onClick={() => aboutGame(el)}>
                {el.name}

                <div className="game-images">
                  <Image image={el} index={0} size="t_thumb" />
                </div>
              </Link>
              <div className="games_btn-like">
                <ButtonLike game={el} />
              </div>
            </li>
          ))}
        {!length && (
          <h3>you don&apos;t have any games yet</h3>
        )}
      </ul>
    </section>
  );
}

export default function PaginateGames({ aboutGame }:any) {
  const { searchGames } = useContext(MyContext);
  return (
    <Paginate elements={searchGames} Component={Games} aboutGame={aboutGame} />
  );
}
//
