import React, {Component} from 'react';
import { StyleSheet,ImageBackground,
  Image, Dimensions, View,
  TextInput, Alert,TouchableOpacity, 
 } from 'react-native';

 import { Container, Header, Content, Button, Text,  Item, Input, Icon, Picker } from 'native-base';


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
        pickerValue: '',
        fbdata: '',
    };
    this.onRegister = this.onRegister.bind(this);
    this.askFacebook = this.askFacebook.bind(this);
    this.getFBData = this.getFBData.bind(this);
  }

  async askFacebook(){
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1799663316768481', {
      permissions: ['public_profile','email'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email,birthday&access_token=${token}`).then(
        
      )
      
      this.setState({
        fbdata: await response.json(),
      })
      this.getFBData()
      console.log(this.state.fbdata)
    
  }

  }

  getFBData(){
    if (this.state.fbdata !== ''){
      this.setState({
        name: this.state.fbdata.name,
        email: this.state.fbdata.email,
        password: 'fblogin'
      })
    }
    Alert.alert('Falta selecionar o seu cargo!!!')
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

     <Container style={styles.containerGeral} >

       <ImageBackground 
       source={require('./images/nuno_app_11.png')} 
       style={{width: '100%', height: '100%', alignItems: 'center',justifyContent: 'center'
    }}
       >

   <Content>
        <Image source={require('./images/logo.png')} 
            style={{width: 300, marginTop: 60, height: 110, alignItems: 'center',
    justifyContent: 'center',}}
          />

       


      
          <Item>
           <Input underline="true"  autoCorrect={false}
            placeholder="Nome" 
           
             onChangeText={(name) => this.setState({name})}
        value={this.state.name}/>
        </Item>

            <Item>
              <Input   autoCorrect={false}
            placeholder="E-mail"
           
             onChangeText={(email) => this.setState({email})}
        value={this.state.email}/>
            </Item>

            <Item>
           <Input    autoCorrect={false}
           secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
             onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>
          </Item>


          <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              selectedValue={(this.state && this.state.pickerValue) || 'cargo'}
      onValueChange={(value) => {
        this.setState({pickerValue: value});
      }}
              placeholder="Selecione o seu cargo"
              placeholderStyle={{ color: "#fff" }}
              placeholderIconColor="#fff"
              style={{ width: undefined }}
             
            >
              <Picker.Item  value={"aluno"} label={'aluno'} />
              <Picker.Item  value={"mentor"} label={'mentor'} />
              <Picker.Item  value={"tutor"} label={'tutor'} />

            </Picker>



          {/*<View style={{ width: '100%', marginTop: -10, paddingTop: 0, marginBottom: -100 }} >

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
*/}


          <Button block success 
            onPress={
     this.onRegister
  }   
        style={{ marginTop: 30 }}
           >
            <Text>Criar Conta</Text>
          </Button>

          <Text style={styles.separator}> ────────  Ou   ────────</Text>

   <Button block success 
             onPress={() => this.askFacebook() }
           style={styles.buttonF} >
            <Text >Facebook</Text>
          </Button>

           <TouchableOpacity
          
       onPress={() => this.props.navigation.navigate('Landing')} style={{marginTop: 20}}
          >
          <Icon name='arrow-back'  style={{ color: "white"}}/>

           </TouchableOpacity >

           </Content>
      </ImageBackground>

    </Container>
    );
  }
}

const styles = StyleSheet.create({
 containerGeral: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
  },
  buttonF:{
    backgroundColor:'rgba(59,89,152,1)',
    borderColor: '#fff',
    
  },
  separator: {
    marginTop: '15%',
    marginBottom: '15%',
    textAlign:'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 100,
    color: 'white',
    fontWeight: 'bold',
     fontSize: 15,
     justifyContent: 'center',
  },
});