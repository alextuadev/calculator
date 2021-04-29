/*import { createStore } from 'redux';
import rootReducer from './reducers';
import initialState from './reducers/initialState';

const store = createStore(rootReducer, initialState)

export default store;
*/

/*
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
*/

/*
import { createStore } from 'redux';
import reducer from './reducers/clients';

const store = createStore(reducer, {})
export default store; 
*/
import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;



export default initialState => {
  const middlewares = [reduxImmutableStateInvariant(), thunk];
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),

  );

  return { store };
};
