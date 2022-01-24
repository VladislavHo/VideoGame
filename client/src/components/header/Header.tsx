import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateIsAuthAction } from "../../store/actions";
import Search from './search/Search'

import "./header.scss";
import { createUser } from "../../store/api";

export default function Header({ isOpenUserForm, isOpenSearchGames, isCloseSearchGames}: any) {
  const dispatch = useDispatch()
  const { isAuth, user } = useSelector((data: any) => data);

  

  const { firstName, lastName } = user;

  return (
    <header>
      <nav>
        <div className="logo"></div>
        
        <Search isOpen = {isOpenSearchGames}/>
        <Link to='/basket'>Basket</Link>
        
        {user.length ? (
          <div className="login_ponel">
            <p>{firstName}</p>
            <button className="sign-out" onClick={()=>dispatch(createUser([]))}>Sign-out</button>
          </div>

        ) : (
          <button type="button" onClick={isOpenUserForm}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
}
