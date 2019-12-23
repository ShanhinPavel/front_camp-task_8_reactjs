import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.module.css';
import { Router } from './router';
import {store} from './store'

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
    <Router />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
