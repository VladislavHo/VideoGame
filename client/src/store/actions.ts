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

export function UpdateSearchGamesAction(paylaod) {
  return{
    type: Actions.UPDATE_SEARCH_GAME,
    paylaod
  }
}

export function GettingGenresAction(paylaod) {
  return{
    type: Actions.GETTING_GENRES,
    paylaod
  }
}

export function UpdateGameOnGenresAction(paylaod) {
  return{
    type: Actions.UPDATE_GAMES_ON_GENRES,
    paylaod
  }
}