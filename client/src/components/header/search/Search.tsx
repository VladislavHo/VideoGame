import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchGames } from '../../../store/api'

export default function Search({isOpen}) {
  const dispatch = useDispatch()
  const [searchGame, setSearchGame] = useState("")




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    dispatch(searchGames(searchGame))
    isOpen()
  }

  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
          <label htmlFor="search">
              <input 
                name={searchGame}
                value={searchGame}
                type="text"
                onChange={(e) => setSearchGame(e.target.value)} 
                />
              <button>Search</button>
          </label>
        </form>
  )
}

