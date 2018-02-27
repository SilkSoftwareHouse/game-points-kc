import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import configureStore from './stores/Store';
import './App.css';

import HomePage from './pages/HomePage';

let store = configureStore();
const RouterWithRedux = connect()(BrowserRouter);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <RouterWithRedux>
             <Route exact path='/' component={HomePage}/>
          </RouterWithRedux>
      </Provider>
    );
  }
}