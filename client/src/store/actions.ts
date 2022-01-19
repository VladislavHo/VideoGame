import {Actions} from './types/action-types'
import { IUserInfo } from './types/store-types'

export default function UpdateUserAction(payload:IUserInfo) {
  console.log(payload)
  return{
    type: Actions.UPDATE_USERINFO,
    payload
  }
}