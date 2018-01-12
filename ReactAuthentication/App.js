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

 
export default class App extends Component<{}> {


  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
  console.log('First, is ' + (isConnected ? 'online' : 'offline'));
});
}

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
}

handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
        console.log(`is connected: ${this.state.status}`);
}

  render() {
    return (

      <Application />
     
    );
  }
}




  