/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
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
       <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>
          <View style={styles.container}>
          <Header_Home/>
          <View style={styles.textContent}>
             <Text>Welcome {this.state.username}to your Home page</Text>
           </View>

          </View>
          </ImageBackground>

       </KeyboardAvoidingView>
    );

  }





}
//My StyleSheet

const styles = StyleSheet.create({
  
 container: {
    flex: 1,
   
 },
  wrapper: {
     flex: 1,
  },
  backgroundImage: {
      width: '100%',

      height: '100%',

      justifyContent: 'center',
    },

 textContent: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,

 }
 
    
});




  