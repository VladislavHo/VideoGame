import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateIsAuthAction } from "../../store/actions";
import Search from "./search/Search";

import "./header.scss";
import { createUser, login } from "../../store/api";
import { IStore } from "../../store/types/store-types";

export default function Header({
  isOpenUserForm,
  isOpenSearchGames,
  isCloseSearchGames,
  length,
}: any) {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((data: any) => data);

  const { firstName, lastName } = user;

  return (
    <header>
      <nav>
        <Link to={"/"}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "green",
            }}
            className="logo"
          ></div>
        </Link>

        <Search isOpen={isOpenSearchGames} />
        <div className="nav-left_content">
          <div className="basket">
            <Link to="/basket">
              <span className="like-text">Like</span>
              <span className="material-icons-outlined like">favorite </span>
            </Link>
            {<span>{length}</span>}
          </div>
          {firstName.length ? (
            <div className="login_ponel">
              <p>{firstName}</p>
              <button className="sign-out" onClick={() => dispatch(login([]))}>
                Sign-out
              </button>
            </div>
          ) : (
            <button className="login-btn" type="button" onClick={isOpenUserForm}>
              <span className="material-icons-outlined login">perm_identity</span>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
