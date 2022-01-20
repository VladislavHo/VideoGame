import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, Outlet} from 'react-router-dom'
import { gameOnGenres } from '../store/requests'

export default function Main({limit}) {
  const dispatch = useDispatch()
  return (
    <>
    <h3>Main</h3>
    {limit.length && (
      <ul>
        {limit.map((el, i) =>(
          <li key={el.name + el.id}>
            <Link to={`genres/${el.slug}`} onClick={()=> dispatch(gameOnGenres(el.id))}>
              {el.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to='/genres'>More...</Link>
        </li>
      </ul>
    )}
    </>
  )
}