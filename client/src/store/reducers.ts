import { initialStore } from './initialStore';
import { Actions } from './types/action-types';
import { IStore } from './types/store-types';

export default function reducers(state: IStore = initialStore, actions:any = {}) {
  switch (actions.type) {
    case Actions.UPDATE_USERINFO:
      return { ...state, user: { ...actions.payload } };
    case Actions.UPDATE_IS_AUTH:
      return { ...state, isAuth: actions.payload };
    case Actions.UPDATE_SEARCH_GAME:
      return { ...state, dataGames: { ...state.dataGames, searchGames: actions.payload } };
    case Actions.GETTING_GENRES:
      return { ...state, dataGames: { ...state.dataGames, genres: actions.payload } };
    case Actions.UPDATE_GAMES_ON_GENRES:
      return { ...state, dataGames: { ...state.dataGames, gamesOnGenres: actions.payload } };
    case Actions.GETTING_THEMES:
      return { ...state, dataGames: { ...state.dataGames, themes: actions.payload } };
    case Actions.UPDATE_GAMES_ON_THEMES:
      return { ...state, dataGames: { ...state.dataGames, gamesOnThemes: actions.payload } };
    case Actions.GETTING_PLATFORMS:
      return { ...state, dataGames: { ...state.dataGames, platforms: actions.payload } };
    case Actions.UPDATE_GAMES_ON_PLATFORMS:
      return { ...state, dataGames: { ...state.dataGames, gamesOnPlatforms: actions.payload } };
    case Actions.GETTING_MAIN_GAMES:
      return { ...state, dataGames: { ...state.dataGames, mainGames: actions.payload } };
    case Actions.UPDATE_BASKET:
      return { ...state, basket: [...actions.payload] };
    case Actions.REMOVE_BASKET:
      return { ...state, basket: state.basket.filter((el) => el.id !== actions.payload) };

    default:
      return state;
  }
}

// { ...state.dataGames.searchGames: searchGames: actions.payload }
