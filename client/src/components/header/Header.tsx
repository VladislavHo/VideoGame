import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './search/Search';

import './header.scss';
import { MyContext } from '../../context';
import { IStore } from '../../store/types/store-types';

interface IHeader{
  isOpenUserForm: any
  isOpenSearchGames: any
  length: number
}

export default function Header({
  isOpenUserForm,
  isOpenSearchGames,
  length,
}:IHeader) {
  const { openForm } = useContext(MyContext);
  const { isAuth, user } = useSelector((data: IStore) => data);

  const { firstName, lastName } = user;

  const handleClickLogin = () => {
    isOpenUserForm();
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <div
            style={{
              width: '50px',
              height: '50px',
              background: 'green',
            }}
            className="logo"
          />
        </Link>

        <Search isOpen={isOpenSearchGames} />
        <div className="nav-left_content">
          <div className="basket">
            <Link to={isAuth && '/basket'} onClick={!isAuth && openForm}>
              <span className="like-text">Like</span>
              <span className="material-icons-outlined like">favorite </span>
            </Link>
            <span>{length}</span>
          </div>
          {firstName.length ? (
            <div className="login_ponel">
              <p>{firstName}</p>
              <p>{lastName && lastName}</p>
            </div>
          ) : (
            <button className="login-btn" type="button" onClick={handleClickLogin}>
              <span className="material-icons-outlined login">perm_identity</span>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
