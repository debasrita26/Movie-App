import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import App from './components/App';
import movies from './reducers'

const store = configureStore({reducer: movies});
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
