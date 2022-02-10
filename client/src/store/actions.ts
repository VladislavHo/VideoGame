import { Actions } from './types/action-types';
import { IUserInfo } from './types/store-types';

export function UpdateUserAction(payload) {
  return {
    type: Actions.UPDATE_USERINFO,
    payload,
  };
}

export function UpdateIsAuthAction(payload:boolean) {
  return {
    type: Actions.UPDATE_IS_AUTH,
    payload,
  };
}

export function UpdateSearchGamesAction(payload) {
  return {
    type: Actions.UPDATE_SEARCH_GAME,
    payload,
  };
}

export function GettingGenresAction(payload) {
  return {
    type: Actions.GETTING_GENRES,
    payload,
  };
}

export function UpdateGameOnGenresAction(payload) {
  return {
    type: Actions.UPDATE_GAMES_ON_GENRES,
    payload,
  };
}
export function GettingThemesAction(payload) {
  return {
    type: Actions.GETTING_THEMES,
    payload,
  };
}

export function UpdateGameOnThemesAction(payload) {
  return {
    type: Actions.UPDATE_GAMES_ON_THEMES,
    payload,
  };
}

export function GettingPlatformsAction(payload) {
  return {
    type: Actions.GETTING_PLATFORMS,
    payload,
  };
}

export function UpdateGameOnPlatformsAction(payload) {
  return {
    type: Actions.UPDATE_GAMES_ON_PLATFORMS,
    payload,
  };
}

export function UpdateBasketAction(payload) {
  return {
    type: Actions.UPDATE_BASKET,
    payload,
  };
}

export function RemoveBasketAction(payload) {
  return {
    type: Actions.REMOVE_BASKET,
    payload,
  };
}
export function UpdateMainGamesAction(payload) {
  return {
    type: Actions.GETTING_MAIN_GAMES,
    payload,
  };
}
