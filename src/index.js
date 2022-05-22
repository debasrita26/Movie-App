import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'

//curried form of func logger(obj,next,action)
const logger=function({dispatch,getState}){
  return function(next){
    return function(action){
      console.log('ACTION_TYPE=',action.type);
      next(action);
    }
  }
}

const store = configureStore({reducer: rootReducer},applyMiddleware(logger));
console.log('store',store);
// console.log('BEFORE STATE',store.getState());

// //dispatch function is used to send actions,this takes an action object as argument
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });
// console.log('AFTER STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* pass store as a prop to the app */}
    <App store={store} />
  </React.StrictMode>
);
