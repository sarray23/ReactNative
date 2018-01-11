/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  AsyncStorage
} from 'react-native';
// this import is responsible for the navigation between various screens of muy app
import { StackNavigator } from 'react-navigation';


export default class Profile extends Component<{}> {

  render() {
    return (
          <View style={styles.container}>
          <Text style={styles.header}>-Welcome to the home page-</Text>

          </View>
    );

  }


}
//My StyleSheet

const styles = StyleSheet.create({
  
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6F4289',
 },
  text: {
     color: '#fff',
  }
    
});




  