import { createStore } from "redux";
import reducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension'
import {middleware} from './middleware'


export const store = createStore(reducer, composeWithDevTools(middleware));



