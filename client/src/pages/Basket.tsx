import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/images/Images';
import ButtonRemove from '../components/buttons/ButtonRemove';
import { MyContext } from '../context';
import Paginate from '../components/paginate/Paginate';
import Loader from '../components/loader/Loader';

import './games.scss';

interface IBasket {
  currentItems: ICurrentItems[];
  length: number;
  aboutGame: (game: ICurrentItems) =>React.SetStateAction<any>
}

interface ICurrentItems {
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string;
}

function Basket({ aboutGame, currentItems, length }: IBasket) {
  return (
    <section className="games basket">
      <h3>
        All Games :
        {length}
      </h3>
      <ul>
        {!currentItems ? (
          <Loader />
        ) : (
          currentItems.map((el: ICurrentItems, i: string | number) => (
            <li key={el.name + el.id}>
              <Link
                to={`/games/${el.id}`}
                onClick={() => aboutGame(currentItems[i])}
              >
                {el.name}
                <div className="game-image">
                  <Image image={el} index={0} size="t_thumb" />
                </div>
              </Link>
              <ButtonRemove game={el} />

            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default function PaginateBasket({ aboutGame }: any) {
  const { basket } = React.useContext(MyContext);
  return (
    <Paginate elements={basket} Component={Basket} aboutGame={aboutGame} />
  );
}
