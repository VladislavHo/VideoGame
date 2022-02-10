import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gameOnGenres } from '../../store/api';

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

function Themes({ currentItems, length } : IPlatforms) {
  const dispatch = useDispatch();
  return (
    <section className="games">
      <h2>Themes</h2>
      <h5>
        Всего тем:
        {length}
      </h5>
      <ul>
        {currentItems && (
          <Loader />
        ) && (
          currentItems.map((el:ICurrentItems) => (
            <li key={el.name + el.id}>
              <Link
                to={`/genres/${el.slug}`}
                onClick={() => dispatch(gameOnGenres(el.id))}
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

export default function ThemesPaginate() {
  const { themes } = useContext(MyContext);
  return (
    <Paginate elements={themes} Component={Themes} aboutGame={null} />

  );
}
