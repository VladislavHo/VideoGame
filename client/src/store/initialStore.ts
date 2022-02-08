
import { IBasket, IGames, IStore, IUserInfo } from "./types/store-types";

export const user:IUserInfo = {
  firstName: '',
  lastName: '',
  email: '',
  id: ''

}

export const basket:IBasket[] = []

export const isAuth:boolean = false

export const dataGames:IGames = {
  searchGames: [],
  genres: [],
  gamesOnGenrs: [],
  mainGames: []
}

export const initialStore:IStore = {
  isAuth,
  user,
  basket,
  dataGames,
  
}

export const MAIN_GAME_ID = [`id = (1020, 1942, 28028, 1877 , 25076)`]
