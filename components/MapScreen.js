import React, {Component} from 'react';
import { StyleSheet, Image, View, Dimensions 
 } from 'react-native';

 import {MapView} from 'expo';

 import { Container, Header, Content, Card, CardItem, Thumbnail, 
   Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Title, Drawer } from 'native-base';

import SideBar from './Sidebar';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        focusedLocation: {
          latitude: 40.630194,
          longitude:  -8.657610,
          latitudeDelta: 0.0032,
          longitudeDelta: 
              Dimensions.get("window").width / Dimensions.get("window").height * 0.0032
          
        },
        locationChosen: false,
         Deca: {
             // 40.629118, -8.655464
             //40.628927, -8.656405
             latitude: 40.628927,
             longitude: -8.656405
            }
      
    };

  }

  pickLocationHandleer = event => {
      const coords = event.nativeEvent.coordinate;
      this.map.animateToRegion({
        ...this.state.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      });
      this.setState(prevState => {
        return {
            focusedLocation: {
                ...prevState.focusedLocation,
                latitude: coords.latitude,
                longitude: coords.longitude
            },
            locationChosen: true,
        };
      });
  }

  getLocationHandler = () => {
      navigator.geolocation.getCurrentPosition(pos => {
          const coordsEvent = {
              nativeEvent: {
                  coordinate:{
                      latitude: pos.coords.latitude,
                      longitude: pos.coords.longitude
                  }
              }
          };
          this.pickLocationHandleer(coordsEvent);
      },
      err => {
          console.log(err);
          alert("Não foi possível obter a sua localização");
      }
      )
  }

 closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

  render() {
    let marker = null;

    if (this.state.locationChosen){
        marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }
    
    return (

      <View style={{ flex: 1, width: '100%'}}>

 <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} 
        style={{width: '100%'}}
        >

         <Header>
          <Left>
            <Button transparent onPress={()=> this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Mapa</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>



<Container >
        <Content >

 <MapView
        style={{ flex: 1, left:0, right: 0, top:0, bottom: 0, position: 'absolute', width: '100%', height: 500 }}
        initialRegion={this.state.focusedLocation}
        onPress={this.pickLocationHandleer}
        ref = {ref => this.map = ref}
      >
      {marker}
      
      <MapView.Marker  coordinate={this.state.Deca}>
        <View style={styles.circle}>
             <Text style={styles.pinText}>1</Text>
            </View>

      </MapView.Marker>
      
  
   </MapView>   
         
    <Button block large danger onPress={()=> this.getLocationHandler()}>
              <Text>Localizar-me</Text>
            </Button>


  </Content>
  </Container> 



          <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="camera" />
              <Text>Notícias</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Dúvidas</Text>
            </Button>
            <Button vertical active >
              <Icon active name="navigate" />
              <Text>Mapa</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Chat</Text>
            </Button>
          </FooterTab>
        </Footer>

</ Drawer>

</View>
      
     


    );
  }
}

const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'red',
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
},
    pinText: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',

},
});