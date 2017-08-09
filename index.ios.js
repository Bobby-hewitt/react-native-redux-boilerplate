import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

import Home from './containers/Home'

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({
  //provide initial state here
})

const App = () =>(
  <Provider store={store}>
    <Home />
  </Provider>
)

AppRegistry.registerComponent('RNRedux', () => App);
