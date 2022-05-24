import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'

//curried form of func logger(obj,next,action)
// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE=',action.type);
//       next(action);
//     }
//   }
// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  // console.log('ACTION_TYPE=',action.type);
  if(typeof action !== 'function'){
      console.log('ACTION_TYPE=',action.type);
  }
      next(action);
}

//middleware
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   // console.log('ACTION_TYPE=',action.type);
//   if(typeof action === 'function'){
//       action(dispatch);
//       return;
//   }
//   next(action);
// }

const store = configureStore({reducer:rootReducer},applyMiddleware(logger,thunk));
console.log('store',store.getState());

export const StoreContext = createContext();
console.log('StoreContext',StoreContext);

class Provider extends React.Component{
  render(){
    const {store}=this.props;
    // pass the store around every descendent and pass the value prop
    return <StoreContext.Provider value={store}>
     {this.props.children} 
    </StoreContext.Provider>
  }
}
// console.log('BEFORE STATE',store.getState());

// //dispatch function is used to send actions,this takes an action object as argument
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });
// console.log('AFTER STATE',store.getState());

export function connect(callback){
  return function(Component){
     class ConnectedComponent extends React.Component{
        constructor(props){
          super(props);
          this.unsubscribe=this.props.store.subscribe(()=> this.forceUpdate());
        }
        componentWillUnmount(){
          this.unsubscribe();
        }
        render(){
          const {store}=this.props;
          const state = store.getState();
              //to get the data we will call the callback function
              const dataToBePassedAsProps=callback(state);
              return (
                <Component
                {...dataToBePassedAsProps} 
                dispatch={store.dispatch}
                />
                );
        }
      }

    class ConnectedComponentWrapper extends React.Component{
      render(){
        return(
          <StoreContext.Consumer>
            {/* we are passing store here so that the constructor in the ConnectedComponent class can access it */}
            {(store) => <ConnectedComponent store={store} />}
          </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    {/* pass store as a prop to the app */}
    <App store={store} />
  </React.StrictMode>
  </Provider>
);
