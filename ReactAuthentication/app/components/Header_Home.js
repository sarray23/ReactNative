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

                
                 <Text>Home Page</Text>
                     


          </View>
    );

  }


}


//My StyleSheet

const styles = StyleSheet.create({
  
 header: {
    
    height: 80,
    marginTop: 20,
    backgroundColor:'#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
  },
  icone: {
   width: 40,
   height: 40,


  }


 
    
});




  