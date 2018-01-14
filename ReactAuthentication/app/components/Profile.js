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
import Header_Home from './Header_Home';



export default class Profile extends Component<{}> {

    state = {
    division: [],
    username: [],

  }
  
  componentDidMount() {
    this._loadInitialState().done();
  }
  //get username and division from login screen to display them in home page

  _loadInitialState = async () => {
 
     var value = await AsyncStorage.getItem('username');
     var value2 = await AsyncStorage.getItem('division');
     if ((value!== null)&&(value2!==null))
     {
        this.setState({username: value});

        this.setState({division: value2});


     }

  }

  //display the username and the division items in the home page 

  render() {
    return (
       <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground source={require('../img/bckground.jpg')} style={styles.backgroundImage}>
          <View style={styles.container}>
          <Header_Home/>
          <View style={styles.textContent}>
             <Text style={styles.txt}>Welcome {this.state.username} From {this.state.division} To 
             Your Home Page</Text>
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

     },
     txt: {

      color:'#fff',
      fontSize: 20,
      fontWeight: 'bold',
     }
 
    
  });




  