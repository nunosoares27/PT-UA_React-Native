import React, {Component} from 'react';
import { StyleSheet, Text,ImageBackground,
  Image, Dimensions, View, Picker,
  TextInput, Button, Alert,TouchableOpacity, 
 } from 'react-native';


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedValue: '',
        pickerValue: ''
      
    };

  }


  render() {
  
    return (
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
            placeholder="Nome"
            style={styles.input}
          />
          <TextInput 
            placeholder="E-mail"
            style={styles.input}
          />
           <TextInput 
            placeholder="Senha"
            style={styles.input}
          />  
          <View style={{ width: '100%', marginTop: -80, paddingTop: 0, marginBottom: -100 }} >

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
          onPress={() => {
    Alert.alert('You tapped the Register button!');
  }}
           
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
        fontSize: 28,
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