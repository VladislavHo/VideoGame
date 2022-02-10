import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gameOnGenres } from '../../store/api';
import Loader from '../../components/loader/Loader';
import '../games.scss';
import { MyContext } from '../../context';
import Paginate from '../../components/paginate/Paginate';

interface ICurrentItems {
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  id: string | null;
  slug: string | null;
}

interface IGenres{
  currentItems: ICurrentItems[]
  length: number | null
}

function Genres({ length, currentItems }:IGenres) {
  const dispatch = useDispatch();
  return (
    <section className="games">
      <h5>
        All Genres:
        {length}
      </h5>
      <ul>
        {!currentItems ? <Loader />
          : currentItems.map((el:ICurrentItems) => (
            <li key={el.name + el.id}>
              <Link
                to={`/genres/${el.slug}`}
                onClick={() => dispatch(gameOnGenres(el.id))}
              >
                {el.name}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default function GenresPaginate() {
  const { genres } = useContext(MyContext);
  return <Paginate elements={genres} Component={Genres} aboutGame={null} />;
}
