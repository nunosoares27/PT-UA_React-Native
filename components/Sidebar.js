import React, {Component} from 'react';
import { StyleSheet, View, Text, Image,ScrollView, Dimensions
 } from 'react-native';

 import { Content,Button, Icon } from 'native-base';



export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      
    };

  }



  render() {
  
    return (

      <ScrollView style={styles.container} >
            <Image style={styles.topImage} source={require( './images/logo.png')} />
            <Content>
          <Button block transparent large light>
            <Text style={{color: 'white'}}>Perfil</Text>
          </Button>
         <Button block transparent large light>
            <Text style={{color: 'white'}}>Noticias</Text>
          </Button>
          <Button block transparent large light>
            <Text style={{color: 'white'}}>Dúvidas</Text>
          </Button>
          <Button block transparent large light>
            <Text style={{color: 'white'}}>Mapas</Text>
          </Button>
          <Button block transparent large light>
            <Text style={{color: 'white'}}>Eventos</Text>
          </Button>
          <Button block transparent large light>
            <Text style={{color: 'white'}}>Chat</Text>
          </Button>
          <Button block large danger>
            <Text>Sair</Text>
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