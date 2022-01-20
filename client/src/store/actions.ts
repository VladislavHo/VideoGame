import {Actions} from './types/action-types'
import { IUserInfo } from './types/store-types'

export function UpdateUserAction(payload:IUserInfo) {
  return{
    type: Actions.UPDATE_USERINFO,
    payload
  }
}

export function UpdateIsAuthAction(payload:boolean) {
  return{
    type: Actions.UPDATE_IS_AUTH,
    payload
  }
}

export function UpdateSearchGamesAction(payload) {
  return{
    type: Actions.UPDATE_SEARCH_GAME,
    payload
  }
}

export function GettingGenresAction(payload) {
  return{
    type: Actions.GETTING_GENRES,
    payload
  }
}

export function UpdateGameOnGenresAction(payload) {
  return{
    type: Actions.UPDATE_GAMES_ON_GENRES,
    payload
  }
}

export function UpdateBasketAction(payload) {
  return{
    type: Actions.UPDATE_BASKET,
    payload
  }
}