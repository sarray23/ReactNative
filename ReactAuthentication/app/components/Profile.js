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


    state = {
     username: [],
  }
  
  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

     var value = await AsyncStorage.getItem('username');
     if (value !== null) {  
       this.setState({username: value});

     }
  }

  //get my username from login screen

  render() {
    return (
          <View style={styles.container}>
             <Text>Welcome {this.state.username} to your Home page</Text>

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
    backgroundColor: '#E8DAF0',
 }
 
    
});




  