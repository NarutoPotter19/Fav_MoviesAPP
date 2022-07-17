import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import movies from './ruducers/rindex';

const store = createStore(movies);
console.log('store' , store);
/*
console.log('BEFORE STATE' , store.getState());

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{ name : 'Man of Steel'}]
});
console.log('AFTER STATE' , store.getState());*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
