import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gameOnPlatforms } from '../../store/api';
import { MyContext } from '../../context';
import Loader from '../../components/loader/Loader';
import '../games.scss';
import Paginate from '../../components/paginate/Paginate';

interface ICurrentItems {
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string | null;
  slug: string | null;
}

interface IPlatforms{
  currentItems: ICurrentItems[]
  length: number | null
}

function Platforms({ currentItems, length }: IPlatforms) {
  const dispatch = useDispatch();
  return (
    <section className="games">
      <h2>Platforms</h2>
      <h5>
        Всего жанров:
        {length}
      </h5>
      <ul>
        {!currentItems ? (
          <Loader />
        ) : (
          currentItems.map((el: ICurrentItems) => (
            <li key={el.name + el.id}>
              <Link
                to={`/platforms/${el.slug}`}
                onClick={() => dispatch(gameOnPlatforms(el.id))}
              >
                {el.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default function PlatformsPaginate() {
  const { platforms } = useContext(MyContext);
  return (
    <Paginate elements={platforms} Component={Platforms} aboutGame={null} />
  );
}
