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
              division: '',


  

     }
  }


/*

//This method will check either my user is already connected or not, in case not, the user would be redirected directly to his home page

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
        <View style={styles.inputcontainer}>

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

            <TextInput
            style={styles.textInput} placeholder='Division'
           value={this.state.division}
            ref="division"
            onChangeText={ (division) => this.setState({division}) }
             underlineColorios='transparent'
            />


    


         </View>
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
             division: this.state.division,

          })
      })

      .then((response) => response.json())
      .then ((res) => {

// if my response is true 

           if(res.success === true){

           // var username = res.message;
           // var division = res.message;




       //    AsyncStorage.setItem('username', res.user);

        // AsyncStorage.setItem('division', res.user);






            AsyncStorage.setItem('user', res.user);

            this.props.navigation.navigate('Profile');
         }

         else {
            alert(res.message);
           // alert(this.state.language);
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

  },


  
   header: {
     fontSize: 40,
     marginBottom: 28,
     fontStyle: 'italic',
     color: '#fff',
     textShadowColor: '#252525',
     textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 15,
     fontWeight: 'bold',
   },
      textInput: {
    margin:8,
     alignSelf: 'stretch',    
       backgroundColor: '#fff',
      backgroundColor:'rgba(255,255,255,1)',

     height: 48,
      fontSize: 16,
padding:18,
    },



    btn: {
      alignSelf: 'stretch',

      backgroundColor: '#80BCD4',
      margin: 28,
      padding: 28,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: '#fff',
      backgroundColor:'rgba(255,255,255,0.6)',
      borderWidth: 1,
     
    },


    backgroundImage: {
      width: '100%',

      height: '100%',

      justifyContent: 'center',
    },


    inputcontainer: {
      backgroundColor:'rgba(255,255,255,0.2)',


      margin: 20,
      marginBottom: 0,
      padding: 20,
      paddingBottom: 10,
      alignSelf: 'stretch',
      borderWidth: 1,
      borderColor:'#fff',
    },

  
  

 

    
});




  