import { basket, initialStore, user } from "./initialStore";
import { Actions } from "./types/action-types";
import { IStore, IUserInfo } from "./types/store-types";


export type AllActions = {
  type: typeof Actions.UPDATE_USERINFO; payload: IUserInfo
}

export default function reducers(state: IStore = initialStore, actions) {
  switch (actions.type) {
    case Actions.UPDATE_USERINFO:
      return { ...state, user: { ...actions.payload } };
    case Actions.UPDATE_IS_AUTH:
      return { ...state, isAuth: actions.payload }
    case Actions.UPDATE_SEARCH_GAME:
      return { ...state, dataGames: { ...state.dataGames, searchGames: actions.payload } }
    case Actions.GETTING_GENRES:
      return { ...state, dataGames: { ...state.dataGames, genres: actions.payload } }
    case Actions.UPDATE_GAMES_ON_GENRES:
      return { ...state, dataGames: { ...state.dataGames, gamesOnGenrs: actions.payload } }
    case Actions.GETTING_MAIN_GAMES:
      return { ...state, dataGames: { ...state.dataGames, mainGames: actions.payload } }
    case Actions.UPDATE_BASKET:
      return { ...state, basket: [...state.basket, actions.payload] }
    default:
      return state
  }
}

// { ...state.dataGames.searchGames: searchGames: actions.payload }