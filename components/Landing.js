import React from 'react';
import { StyleSheet,ImageBackground,
  Image, Dimensions, View,
  TextInput, Alert,TouchableOpacity, 
 } from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';

export default class Landing extends React.Component {
  static navigationOptions = { header: null }
  render() {
    return (
     
      <Container >
        
       <ImageBackground 
       source={require('./images/nuno_app_11.png')} 
       style={{width: '100%', height: '100%', alignItems: 'center',
    justifyContent: 'center',}}
       >
        <Content contentContainerStyle={styles.containerGeral}>
          <Image source={require('./images/logo.png')} 
            style={{width: 300, height: 110, alignItems: 'center',
    justifyContent: 'center',}}
          />
          
         
    
          <Button block success 
          onPress={() => this.props.navigation.navigate('Login')}
          style={{marginTop: 30}} >
            <Text>Entrar</Text>
          </Button>
          <Button block danger 
          onPress={() => this.props.navigation.navigate('Register')}
          style={{marginTop: 30}} >
            <Text>Registar</Text>
          </Button>
          
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
});