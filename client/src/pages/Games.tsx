import React, { useState } from 'react'
import { useStore } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import AboutGame from '../components/about-game/AboutGame'

export default function Games({games, aboutGame}) {


  return (
    <>
    <h3>Games</h3>
    <ul>
    {games.map((el, i) => (
      <li key={el.id + el.name}>
        <Link to={`/games/${el.id}`} onClick={()=> aboutGame(games[i])}>
          {el.name}
        </Link>
      </li>
))}
    </ul>
    </>
  )
}