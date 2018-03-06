import React from 'react';
import { StyleSheet, Text,ImageBackground,
  Image, Dimensions, View,
  TextInput, Button, Alert,TouchableOpacity,
 } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
       <ImageBackground 
       source={require('./images/nuno_app_11.png')} 
       style={{width: '100%', height: '100%', alignItems: 'center',
    justifyContent: 'center',}}
       >
          <Image source={require('./images/logo.png')} 
            style={{width: 300, height: 110, alignItems: 'center',
    justifyContent: 'center',}}
          />
          <Text style={styles.loginText}>Login</Text>
          <TextInput 
            placeholder="E-mail"
            style={styles.input}
          />
           <TextInput 
            placeholder="Senha"
            style={styles.input}
          />
          

          <TouchableOpacity
          style={styles.button}
          onPress={() => {
    Alert.alert('You tapped the Login button!');
  }}
           
          >
            <Text style={styles.buttonText}>Entrar</Text>

          </TouchableOpacity>
          <Text style={styles.separator}> ────────  Ou   ────────</Text>

                 <TouchableOpacity
          style={styles.buttonF}
          onPress={() => {
    Alert.alert('You tapped the Facebook Login button!');
  }}
          >
           <Text style={styles.buttonText}>Facebook</Text>

           </TouchableOpacity >
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
     fontWeight: 'bold',
        fontSize: 48,
        color: 'white',
  },
  input: {
    width: '80%',
    height: 30,
    backgroundColor: 'rgba(255,255,255,1)',
    color: 'white',
    marginTop: '10%',
    paddingLeft: '2%',
  },
  button:{
    width: '80%',
    height: 40,
    marginTop: '10%',
    backgroundColor:'rgba(255,0,0,1)',
    borderColor: '#fff',
    
  },
  buttonText: {
    textAlign:'center',
    color: '#fff',
    fontWeight: 'bold',
     fontSize: 28,
     justifyContent: 'center',
  },
  separator: {
    marginTop: '10%',
    textAlign:'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 100,
    color: 'white',
    fontWeight: 'bold',
     fontSize: 15,
     justifyContent: 'center',
  },
  buttonF:{
    width: '80%',
    height: 40,
    marginTop: '10%',
    backgroundColor:'rgba(59,89,152,1)',
    borderColor: '#fff',
    
  }
});