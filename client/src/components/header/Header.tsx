import React from 'react'
import {Link} from 'react-router-dom'

import './header.scss'

export default function Header({isOpen}:any) {
  return (
    <header>
      <nav>
        <div className="logo"></div>
        <form>
          <label htmlFor="search">
            <input type="text" />
            <button>Search</button>
          </label>
        </form>
        <button type="button" onClick={isOpen}>Login</button>
      </nav>
    </header>

  )
}