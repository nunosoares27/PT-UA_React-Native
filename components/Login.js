import React from 'react';
import { StyleSheet, Text,ImageBackground,
  Image, Dimensions, View,
  TextInput, Button, Alert,TouchableOpacity,
  AsyncStorage
 } from 'react-native';

import axios from 'axios';


export default class Login extends React.Component {
  // static navigationOptions = { header: null }
 constructor(props) {
    super(props);

  this.state = {
        email: '',
        password: '',
    };
    this.onLogin = this.onLogin.bind(this);

}

  onLogin(){

    axios.post('http://ptua.desenvolvimento/api/loginApp', {
    email: this.state.email,
    password: this.state.password,
  })
  .then(async(response) => {
   console.log(response.data);
    this.setState({
        email: '',
        password: '',
    })

    // alert(user.email);

    if (response.data.name === undefined){
      alert(response.data.name);
        

    } else {
         try {
           var id = response.data.id.toString();
          // alert(id);
            await AsyncStorage.setItem('id', id );
            await AsyncStorage.setItem('username', response.data.name);
            await AsyncStorage.setItem('useremail', response.data.email);
            await AsyncStorage.setItem('userType', response.data.typeUser);

            // const uname = await AsyncStorage.getItem('username');
            // const ue = await AsyncStorage.getItem('useremail');
            // const ut = await AsyncStorage.getItem('userType');
            const idu = await AsyncStorage.getItem('id');
          //  alert(idu);
            // alert(uname);
            // alert(ut);
            // alert(ue);
            // console.log(response.data);
             this.props.navigation.navigate('Home');

    }     catch (error) {
        alert(error);
      }
        //  this.props.navigation.navigate('Home');
    }
    
  })
  .catch(function (error) {
    alert(error);
  });


  }

  render() {
    return (
      <View style={styles.containerGeral} >
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
          onChangeText={(email) => this.setState({email})}
        value={this.state.email}
          />
           <TextInput 
            placeholder="Senha"
            style={styles.input}
              onChangeText={(password) => this.setState({password})}
           value={this.state.password}
          />
          

          <TouchableOpacity
          style={styles.button}
        //  onPress={() => this.props.navigation.navigate('Home')}
            onPress={
     this.onLogin
  }
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
    </View>
    );
  }
}


const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    color: 'black',
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