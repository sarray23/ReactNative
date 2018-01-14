/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  NetInfo,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';



const Application = StackNavigator({

  Home: { screen: Login },
  Profile: { screen: Profile }
  }, {  
     navigationOptions: {
        header: false,
        }
  });
//NetInfo
 
export default class App extends Component<{}> {


  
  render() {
    return (

      <Application />
     
    );
  }
}




  