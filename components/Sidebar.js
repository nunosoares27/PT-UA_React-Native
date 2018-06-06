import React, {Component} from 'react';
import { StyleSheet, View, Text, Image,ScrollView,AsyncStorage, Dimensions
 } from 'react-native';

 import { Content,Button, Icon } from 'native-base';



export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      
    };
    this.logOut = this.logOut.bind(this);

  }

  async logOut()
  {

    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("useremail");
    await AsyncStorage.removeItem("userType");
    await AsyncStorage.removeItem("id");
    await AsyncStorage.removeItem("userimg");
    await AsyncStorage.removeItem("descricaoUser");
    
    this.props.navigation.navigate("Landing");

  }



  render() {
  
    return (

      <ScrollView style={styles.container} >
            <Image style={styles.topImage} source={require( './images/logo.png')} />
            <Content>
          <Button block transparent large light 
           onPress={() => this.props.navigation.navigate("PerfilScreen")}>
            <Text style={{color: 'white'}}>Perfil</Text>
          </Button>
         <Button block transparent large light
         onPress={() => this.props.navigation.navigate("Home")}
         >
            <Text style={{color: 'white'}}>Comunidade</Text>
          </Button>
          <Button block transparent large light 
          onPress={() => this.props.navigation.navigate("MapScreen")}
          >
            <Text style={{color: 'white'}}>Mapa</Text>
          </Button>
          <Button block transparent large light 
          onPress={() => this.props.navigation.navigate("EventScreen")}
          >
            <Text style={{color: 'white'}}>Eventos</Text>
          </Button>
          <Button block transparent large light
         onPress={() => this.props.navigation.navigate("ChatScreen")}
         >
            <Text style={{color: 'white'}}>Chat</Text>
          </Button>
          <Button block large danger onPress={this.logOut}>
            <Text style={{color: 'white'}}>Sair</Text>
          </Button>
        </Content>
      </ScrollView>    
     


    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#000',
      marginRight: 0
  },
  text:{
    color: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 15,
  },
  topImage: {
    //   width: Dimensions.get('window').width,
    //   height: 200,
    //   marginTop: 45,
    //   opacity: 0.7,
    width: 300, height: 80, alignItems: 'center',
    justifyContent: 'center',marginTop: 45, marginLeft: 2, marginRight:2, resizeMode: 'contain'
  }
});