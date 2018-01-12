/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Picker,
  View,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Item
} from 'react-native';

import ValidationComponent from 'react-native-form-validator';

// this import is responsible for the navigation between various screens of muy app
import { StackNavigator } from 'react-native-navigation';


export default class Login extends Component<{}> {

  constructor(props) {
     super(props);
     this.state = {
       username: '',
       password: '',
  

     }
  }




//This method will check either my user is already connected or not, in case not, the user would be redirected directly to his home page
/*
  componentDidMount() {
    this._loadInitialState().done();
  }

//Redirection to profile page directly if user connected
  _loadInitialState = async () => {

     var value = await AsyncStorage.getItem('user');
     if (value !== null){
       this.props.navigation.navigate('Profile');
     }
  }*/

  render() {
    return (

      

      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>

        <View style={styles.container}>


          <Text style={styles.header}>-LOGIN-</Text>

          <TextInput
            style={styles.textInput} placeholder='Username'
            value={this.state.username}
            ref="username"
            onChangeText={ (username) => this.setState({username}) }
            underlineColorios='transparent'
            />

     


            <TextInput
            style={styles.textInput} placeholder='Pasword'
           value={this.state.password}
            ref="password"
            onChangeText={ (password) => this.setState({password}) }
             secureTextEntry={true} underlineColorios='transparent'
            />
             <Picker 
            style={{
            width: 200,
            }}
            selectedValue={(this.state && this.state.pickerValue) || 'a'}
            onValueChange={(value) => {
            this.setState({pickerValue: value});
            }} itemStyle={{color: 'white'}}>
            <Picker.Item label={'Division'} value={'a'} />
           <Picker.Item label={'Division'} value={'b'} />
           <Picker.Item label={'Division'} value={'c'} />

          </Picker>
 


            <TouchableOpacity
             style={styles.btn}
             onPress={this.login}>
             <Text>Login</Text>
            </TouchableOpacity>





          </View>

</ImageBackground>

       </KeyboardAvoidingView>


    );

  }







  login = () => {

      fetch('http://192.168.1.15:3000/users', {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
          body: JSON.stringify({
             username: this.state.username,
             password: this.state.password,
          })
      })

      .then((response) => response.json())
      .then ((res) => {

// if my response is true 
           if(res.success === true){
            var username = res.message;

           AsyncStorage.setItem('username', res.user);



            AsyncStorage.setItem('user', res.user);
            this.props.navigation.navigate('Profile');
         }

         else {
            alert(res.message);
         }

         

      })

      .done();
  }

}



//My StyleSheet
const styles = StyleSheet.create({
  wrapper: {
     flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },


  
   header: {
     fontSize: 24,
     marginBottom: 60,
     color: '#fff',
     fontWeight: 'bold',
   },
   textInput: {
     alignSelf: 'stretch',
     padding: 16,
     marginBottom: 20,
     backgroundColor: '#fff',
    },
    btn: {
      alignSelf: 'stretch',
      backgroundColor: '#80BCD4',
      padding: 20,
      alignItems: 'center',
      borderColor: '#9C78B1',
      borderRadius: 20,
      borderWidth: 2,
    },
    backgroundImage: {
      width: '100%',

      height: '100%',

      justifyContent: 'center',
    }

 

    
});




  