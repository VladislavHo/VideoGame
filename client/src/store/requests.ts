import axios from "axios"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import {GettingGenresAction, UpdateGameOnGenresAction, UpdateMainGamesAction, UpdateSearchGamesAction, UpdateUserAction} from './actions'
import { MAIN_GAME_ID } from "./initialStore"
import { IStore } from "./types/store-types"

const URL = 'http://localhost:5000/api'

export default function createUser(user) {
  return async(
    dispatch: ThunkDispatch<void, IStore, AnyAction>
  ):Promise<void> =>{
    try {
      await axios.post(`${URL}/create-user`,{
        user
      }).then(user => dispatch(UpdateUserAction({...user.data})))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function searchGames(game, id = null) {
  return async(
    dispatch
  )=>{
    try {
      await axios.post(`${URL}/search-games`, {
        game,
        id
      }).then(games => dispatch(UpdateSearchGamesAction(games.data)))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function getMainGames() {
  return async(
    dispatch
  ) =>{
    try {
      await axios.post(`${URL}/search-games`, {
          id: MAIN_GAME_ID
      }).then(games => dispatch(UpdateMainGamesAction(games.data)))
    } catch (error) {
      console.log(error.message)
    }
  }
}


export function gettingGenres() {
  return async (dispatch)=>{
    try {
      await axios.get(`${URL}/genres`)
      .then(genres => dispatch(GettingGenresAction(genres.data)))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function gameOnGenres(id) {
  return async (dispatch)=>{
    try {
      await axios.post(`${URL}/game-on-genres`, {
        id
      })
      .then(genres => dispatch(UpdateGameOnGenresAction(genres.data)))
    } catch (error) {
      console.log(error.message)
    }
  }
}

// dispatch(UpdateGameOnGenresAction(genres.data))