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
import Header_Home from './Header_Home';
import Login from './Login';



export default class Profile extends Component<{}> {


    state = {
     username: [],



  }
  
  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

     var value = await AsyncStorage.getItem('username');


     if (value !== null){  
       this.setState({username: value});



     }
  }

  //get my username from login screen and display it 

  render() {
    return (
          <View style={styles.container}>
          <Header_Home/>
          <View style={styles.textContent}>
             <Text>Welcome {this.state.username}to your Home page</Text>
           </View>

          </View>
    );

  }





}
//My StyleSheet

const styles = StyleSheet.create({
  
 container: {
    flex: 1,
   
    backgroundColor: '#E8DAF0',
 },

 textContent: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,

 }
 
    
});




  