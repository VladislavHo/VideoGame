
import { IGames, IStore, IUserInfo } from "./types/store-types";

export const user:IUserInfo = {
  firstName: '',
  lastName: '',
  email: '',
  __v: 0,
  _id: ''

}

export const isAuth:boolean = false

export const dataGames:IGames = {
  searchGames: [],
  genres: [],
  gamesOnGenrs: []
}

export const initialStore:IStore = {
  isAuth,
  user,
  dataGames,
  
}
