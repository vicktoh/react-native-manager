import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';
import firebase from 'firebase';

class App extends Component{
  /*initializeFirebase() {
    const firebase = require("firebase");
  
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAlVGvBUgzUcTCP_wJRsMzw3E9N8LHBW-I",
      authDomain: "manager-e3fd0.firebaseapp.com",
      databaseURL: "https://manager-e3fd0.firebaseio.com",
      projectId: "manager-e3fd0",
      storageBucket: "manager-e3fd0.appspot.com",
      messagingSenderId: "574072566800"
    };
    firebase.initializeApp(config);
  
  }*/
  
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAlVGvBUgzUcTCP_wJRsMzw3E9N8LHBW-I",
      authDomain: "manager-e3fd0.firebaseapp.com",
      databaseURL: "https://manager-e3fd0.firebaseio.com",
      projectId: "manager-e3fd0",
      storageBucket: "manager-e3fd0.appspot.com",
      messagingSenderId: "574072566800"
    };
    firebase.initializeApp(config);
    
  }

  render(){
    return(
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}

export default App;

