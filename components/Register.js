import React, {Component} from 'react';
import { StyleSheet, Text,ImageBackground,
  Image, Dimensions, View, Picker,
  TextInput, Button, Alert,TouchableOpacity, 
 } from 'react-native';

import { Icon, } from 'native-base';

import axios from 'axios';



export default class Register extends Component {
  // static navigationOptions = { header: null }
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        password: '',
        selectedValue: '',
        pickerValue: ''
      
    };
    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(){

    axios.post('http://ptua.tk/api/register', {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    typeUser: this.state.pickerValue
  })
  .then((response) => {
    alert('Registado com sucesso');
    this.setState({
        name: '',
        email: '',
        password: '',
        selectedValue: '',
        pickerValue: ''
    })
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
       style={{width: '100%', height: 1000, alignItems: 'center',justifyContent: 'center'
    }}
       >
          <Image source={require('./images/logo.png')} 
            style={{width: 300, height: 110, alignItems: 'center',
    justifyContent: 'center',}}
          />
          {/* <Text style={styles.loginText}>Registar</Text> */}
          <TextInput 
          autoCorrect={false}
            placeholder="Nome"
            style={styles.input}
             onChangeText={(name) => this.setState({name})}
        value={this.state.name}
          />
          <TextInput 
          autoCorrect={false}
            placeholder="E-mail"
            style={styles.input}
             onChangeText={(email) => this.setState({email})}
        value={this.state.email}
          />
           <TextInput 
           autoCorrect={false}
           secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
             onChangeText={(password) => this.setState({password})}
        value={this.state.password}
          />
          <View style={{ width: '100%', marginTop: -10, paddingTop: 0, marginBottom: -100 }} >

           <Picker  mode= 'dropdown' selectedValue={(this.state && this.state.pickerValue) || 'cargo'}
      onValueChange={(value) => {
        this.setState({pickerValue: value});
      }} itemStyle={{color: 'red', }} TextStyle={{fontWeight: 'bold',}} >
              <Picker.Item value={"cargo"} label={'Selecione um cargo'} />
              <Picker.Item  value={"aluno"} label={'aluno'} />
              <Picker.Item  value={"mentor"} label={'mentor'} />
              <Picker.Item  value={"tutor"} label={'tutor'} />

          </Picker>
          </View>

          <TouchableOpacity
          style={styles.button}
          onPress={
     this.onRegister
  }
           
          >
            <Text style={styles.buttonText}>Criar Conta</Text>

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

           <TouchableOpacity
          
       onPress={() => this.props.navigation.navigate('Landing')} style={{marginTop: 20}}
          >
          <Icon name='arrow-back' />

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
        fontSize: 28,
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