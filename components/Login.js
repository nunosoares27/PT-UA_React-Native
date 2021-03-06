import React from 'react';
import { StyleSheet,ImageBackground,
  Image, Dimensions, View,
  TextInput,  Alert,TouchableOpacity,
  AsyncStorage
 } from 'react-native';

 import { Container, Header, Content, Button, Text,  Item, Input, Icon } from 'native-base';


import axios from 'axios';


export default class Login extends React.Component {
  // static navigationOptions = { header: null }
 constructor(props) {
    super(props);

  this.state = {
        email: '',
        password: '',
        emailError: true,
        emailSuccess: false,
        senhaError: true,
        senhaSuccess: false,
    };
    this.onLogin = this.onLogin.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSenhaChange = this.onSenhaChange.bind(this);
    this.askFacebook = this.askFacebook.bind(this);
    this.getFBData = this.getFBData.bind(this);
}

onSenhaChange (password)
{
   this.setState({
             password: password,
    });

      if(this.state.password.length === 0){
    this.setState({
            senhaError : true,
             senhaSuccess: false,
           
    });

      }

     if(this.state.password.length > 4){
    this.setState({
            senhaError : false,
             senhaSuccess: true,
           
    });

     }

     if(this.state.password.length <= 4){
      this.setState({
        senhaError : true,
         senhaSuccess: false,
       
});
     } 

     }


  onEmailChange(email)
  {
    this.setState({
             email: email,
           
    });

      if(this.state.email.length === 0){
    this.setState({
             emailError : true,
             emailSuccess: false,
           
    });
}

    if(this.state.email.indexOf("@") !== -1 && this.state.email.length > 0 ){
        
        this.setState({
             emailError : false,
            emailSuccess: true,
    });

  }

  if(this.state.email.indexOf("@") == -1) {
    this.setState({
      emailError : true,
     emailSuccess: false,
});

  }
  



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
        email: this.state.fbdata.email,
        password: 'fblogin'
      })
    }
    this.onLogin()
  }

  onLogin()
  {

    axios.post('http://ptua.tk/api/loginApp', {
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
      Alert.alert('Login não efetuado');
        

    } else {
         try {
           var id = response.data.id.toString();
          // alert(id);
            await AsyncStorage.setItem('id', id );
            await AsyncStorage.setItem('username', response.data.name);
            await AsyncStorage.setItem('useremail', response.data.email);
            await AsyncStorage.setItem('userType', response.data.typeUser);
            await AsyncStorage.setItem('userimg', response.data.img.toString());
            await AsyncStorage.setItem('descricaoUser', response.data.descricaoUser);


            // const uname = await AsyncStorage.getItem('username');
            // const ue = await AsyncStorage.getItem('useremail');
            // const ut = await AsyncStorage.getItem('userType');
            const idu = await AsyncStorage.getItem('id');
          //  alert(idu);
            // alert(uname);
            // alert(ut);
            // alert(ue);
             console.log(response.data);
             this.props.navigation.navigate('Home');

    }     catch (error) {
      Alert.alert('Login não efetuado');
      }
        //  this.props.navigation.navigate('Home');
    }
    
  })
  .catch(function (error) {
    alert('Login não efetuado');
    this.setState({
      emailError : true,
      emailSuccess: false,
      senhaError: true,
      senhaSuccess: false,
    })
  });


  }

  render() {
    return (
      <Container style={styles.containerGeral} >
       <ImageBackground 
       source={require('./images/nuno_app_11.png')} 
       style={{width: '100%', height: '100%', alignItems: 'center',
    justifyContent: 'center',}}
       >
       <Content>
          <Image source={require('./images/logo.png')} 
            style={{width: 300, marginTop: 60, height: 110, alignItems: 'center',
    justifyContent: 'center',}}
          />

          <Item error={this.state.emailError} 
         success={this.state.emailSuccess}
         >
         <Input  placeholder="E-mail" onChangeText={this.onEmailChange}
        value={this.state.email} />
            <Icon name={this.state.emailError ? (name='close-circle'): name=('checkmark-circle')} 
             />
             </Item> ) :'' } 

          <Item error={this.state.senhaError} 
         success={this.state.senhaSuccess} style={{marginBottom: 30 }}
         >
         <Input   autoCorrect={false}
           secureTextEntry={true}
            placeholder="Senha"
              onChangeText={this.onSenhaChange}
           value={this.state.password} />
            <Icon name={this.state.senhaError ? (name='close-circle'): name=('checkmark-circle')} 
             />
             </Item> ) :'' } 



            {this.state.password.length === 0 && this.state.senhaError === false && this.state.senhaSuccess === false
             ? (<Item style={{marginBottom: 30 }} > 
             <Input  autoCorrect={false}
           secureTextEntry={true}
            placeholder="Senha"
              onChangeText={this.onSenhaChange}
           value={this.state.password} />
            <Icon  />
         </Item>) : '' }
           

         {this.state.emailError === true 
         || this.state.senhaError === true ||
          this.state.email.length === 0 || 
          this.state.password.length === 0 ?
          (  <Button block success disabled 
            onPress={
     this.onLogin
  }
           >
            <Text>Entrar</Text>
          </Button>)
          :
          ( <Button block success 
            onPress={
     this.onLogin
  }
           >
            <Text>Entrar</Text>
          </Button>)
          } 
         



          <Text style={styles.separator}> ────────  Ou   ────────</Text>

           <Button block success 
             onPress={() => this.askFacebook()}
           style={styles.buttonF} >
            <Text >Facebook</Text>
          </Button>


            <TouchableOpacity
          
       onPress={() => this.props.navigation.navigate('Landing')} style={{marginTop: 20}}
          >
          <Icon name='arrow-back' style={{color: "white",}} />

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
  // container: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  loginText: {
     fontWeight: 'bold',
        fontSize: 48,
        color: 'white',

  },
  input: {
    color: 'black',
  },
  // button:{
  //   marginTop: '15%',
  // },
  buttonText: {
    height: 100,
    textAlign:'center',
    color: '#fff',
    fontWeight: 'bold',
     fontSize: 28,
     justifyContent: 'center',
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
  buttonF:{
    backgroundColor:'rgba(59,89,152,1)',
    borderColor: '#fff',
    
  }
});