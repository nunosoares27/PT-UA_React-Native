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
        locationChosen: false
      
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
            locationChosen: true
        };
      });
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
   </MapView>   
         



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
  
});