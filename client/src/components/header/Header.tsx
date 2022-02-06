import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateIsAuthAction } from "../../store/actions";
import Search from './search/Search'

import "./header.scss";
import { createUser, login } from "../../store/api";
import { IStore } from "../../store/types/store-types";

export default function Header({ isOpenUserForm, isOpenSearchGames, isCloseSearchGames, length}: any) {
  const dispatch = useDispatch()
  const { isAuth, user } = useSelector((data: any) => data);


  

  const { firstName, lastName } = user;

  return (
    <header>
      <nav>
        <Link to={'/'}>
        <div style={{
          width: '50px',
          height: '50px',
          background: 'green'
        }} className="logo"></div>
        </Link>

        
        <Search isOpen = {isOpenSearchGames}/>
        <div className="basket">

        <Link to='/basket'>Basket</Link><span>{length}</span>
        </div>
        {firstName.length ? (
          <div className="login_ponel">
            <p>{firstName}</p>
            <button className="sign-out" onClick={()=>dispatch(login([]))}>Sign-out</button>
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
