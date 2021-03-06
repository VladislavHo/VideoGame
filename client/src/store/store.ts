import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import { middleware } from './middleware';

export const store = createStore(reducer, composeWithDevTools(middleware));
