import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  GettingGenresAction, GettingPlatformsAction, GettingThemesAction, UpdateBasketAction, UpdateGameOnGenresAction, UpdateGameOnPlatformsAction, UpdateGameOnThemesAction, UpdateMainGamesAction, UpdateSearchGamesAction, UpdateUserAction,
} from './actions';
import { MAIN_GAME_ID } from './initialStore';
import { IStore } from './types/store-types';

const URL = 'https://game-shop-server.herokuapp.com/api';

export function createUser(user: any) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ): Promise<void> => {
    try {
      await axios.post(`${URL}/auth/registration`, {
        user,
      }).then((userDB) => dispatch(UpdateUserAction({ ...userDB.data })));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function login(user: any) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ): Promise<void> => {
    try {
      await axios.post(`${URL}/auth/login`, {
        user,
      }).then((userDB) => {
        const {
          id, firstName, lastName, email, basket,
        } = userDB.data;
        dispatch(UpdateUserAction({
          id, firstName, lastName, email,
        }));
        dispatch(UpdateBasketAction(basket));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function searchGames(game: string, id = null) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ): Promise<void> => {
    try {
      await axios.post(`${URL}/search-games`, {
        game,
        id,
      }).then((games) => dispatch(UpdateSearchGamesAction(games.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getMainGames() {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ): Promise<void> => {
    try {
      await axios.post(`${URL}/search-games`, {
        id: MAIN_GAME_ID,
      }).then((games) => dispatch(UpdateMainGamesAction([...games.data])));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function gettingGenres() {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>): Promise<void> => {
    try {
      await axios.get(`${URL}/genres`)
        .then((genres) => dispatch(GettingGenresAction(genres.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function gameOnGenres(id: string | number) {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>): Promise<void> => {
    try {
      await axios.post(`${URL}/game-on-genres`, {
        id,
      })
        .then((genres) => dispatch(UpdateGameOnGenresAction(genres.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateBasket(game: any) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore,
  ): Promise<void> => {
    try {
      const { user } = getState();
      const { email } = user;
      await axios.post(`${URL}/update-basket`, {
        email,
        game,
      })
        .then((basketDB) => dispatch(UpdateBasketAction(basketDB.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function removeBasket(game) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore,
  ): Promise<void> => {
    try {
      const { user } = getState();
      const { email } = user;
      await axios.post(`${URL}/remove-basket`, {
        email,
        game,
      })
        .then((basketDB) => dispatch(UpdateBasketAction(basketDB.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function gettingThemes() {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>): Promise<void> => {
    try {
      await axios.get(`${URL}/themes`)
        .then((themes) => dispatch(GettingThemesAction(themes.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function gameOnThemes(id: string | number) {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>): Promise<void> => {
    try {
      await axios.post(`${URL}/game-on-themes`, {
        id,
      })
        .then((themes) => dispatch(UpdateGameOnThemesAction(themes.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function gettingPlatforms() {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>): Promise<void> => {
    try {
      await axios.get(`${URL}/platforms`)
        .then((themes) => dispatch(GettingPlatformsAction(themes.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function gameOnPlatforms(id: string | number) {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>): Promise<void> => {
    try {
      await axios.post(`${URL}/game-on-platforms`, {
        id,
      })
        .then((genres) => dispatch(UpdateGameOnPlatformsAction(genres.data)));
    } catch (error) {
      console.log(error.message);
    }
  };
}
