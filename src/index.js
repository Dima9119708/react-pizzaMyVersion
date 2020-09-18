import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/app.scss';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';


smoothscroll.polyfill();

ReactDOM.render(
  <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
