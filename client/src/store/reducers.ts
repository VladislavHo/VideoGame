import { initialStore, user } from "./initialStore";
import { Actions } from "./types/action-types";
import { IStore, IUserInfo } from "./types/store-types";


export type AllActions = {
  type: typeof Actions.UPDATE_USERINFO; payload: IUserInfo
}

export default function reducers(state:IStore = initialStore, actions) {
  switch (actions.type) {
    case Actions.UPDATE_USERINFO:
      console.log(actions.payload)
      return { ...state, user : {...actions.payload} };
  
    default:
      return state
  }
}