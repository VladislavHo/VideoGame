import axios from "axios"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import UpdateUserAction from './actions'
import { IStore } from "./types/store-types"

const URL = 'http://localhost:5000/api'

export default function createUser(user) {
  return async(
    dispatch: ThunkDispatch<void, IStore, AnyAction>
  ):Promise<void> =>{
    try {
      await axios.post(`${URL}/create-user`,{
        user
      }).then(user => dispatch(UpdateUserAction({...user.data})))
    } catch (error) {
      console.log(error.message)
    }
  }
}