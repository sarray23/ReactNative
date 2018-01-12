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


export default class Header_Home extends Component<{}> {



  render() {
    return (

          <View style={styles.header}>

                
                 <Text style={styles.title}>Home Page</Text>
                     


          </View>
    );

  }


}


//My StyleSheet

const styles = StyleSheet.create({
  
 header: {

    fontSize: 40,
     fontStyle: 'italic',
     color: '#fff',
     textShadowColor: '#252525',
     textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 15,
     fontWeight: 'bold',
    

    height:70,
    backgroundColor:'#fff',
    flexDirection: 'row',
          backgroundColor:'rgba(255,255,255,0.8)',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
  },
  icone: {
   width: 40,
   height: 40,


  },
  title: {
    marginTop: 24,
     fontWeight: 'bold',
      fontSize: 19,


  }


 
    
});




  