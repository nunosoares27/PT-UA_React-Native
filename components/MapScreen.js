import React, {Component} from 'react';
import { StyleSheet, Image, View, Dimensions 
 } from 'react-native';

 import {MapView} from 'expo';

 import { Container, Header, Content, Card, CardItem, Thumbnail, 
   Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Title, Drawer } from 'native-base';

/// Google Maps Api key AIzaSyB59V7NjH5nCMhFZbC3tD4tHNRUUv9ILAc


import SideBar from './Sidebar';

import MapViewDirections from 'react-native-maps-directions';

import axios from 'axios';

import FooterApp from './FooterTab';

const GOOGLE_MAPS_APIKEY = "AIzaSyB59V7NjH5nCMhFZbC3tD4tHNRUUv9ILAc";
// var origin = {latitude: this.state.focusedLocation.latitude, longitude: this.state.focusedLocation.longitude};
// var destination = {latitude: this.state.Deca.latitude, longitude: this.state.Deca.longitude};

const MapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];


export default class MapScreen extends Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);

    this.state = {
        focusedLocation: {
          latitude: 40.630194,
          longitude:  -8.656405,
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
            },

        origin: {
          latitude: 40.630194,
          longitude: -8.65640
        },

        destination:{
          latitude: 40.628927,
          longitude: -8.656405
        },

        users: [],
      
    };

    

  }

  componentWillMount() {
      axios.get('http://ptua.desenvolvimento/api/users')
        .then(response => {
          this.setState({ users: response.data});
        } )
        .catch(function (error) {
          alert(error);
        });

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
            origin: {
              latitude: coords.latitude,
              longitude: coords.longitude
            },
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

    const Users = this.state.users.map((user) =>
    <Text key={user.id}>{ user.name }-{user.email}-{user.typeUser}</Text>
  );


    if (this.state.locationChosen){
        marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }
    
    return (

      <View style={{ flex: 1, width: '100%'}}>

 <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} navigation={this.props.navigation} />}
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
            <Button transparent  onPress={() => this.props.navigation.navigate('Home')} >
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>



<Container >
        <Content >

 <MapView
        style={{ flex: 1, left:0, right: 0, top:0, bottom: 0, position: 'absolute', width: '100%', height: 500 }}
       // provider={MapView.PROVIDER_GOOGLE}
        toolbarEnabled={true}
        mapType="hybrid"
        minZoomLevel={1}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsBuildings={true}
       // customMapStyle={MapStyle}
        initialRegion={this.state.focusedLocation}
        onPress={this.pickLocationHandleer}
        ref = {ref => this.map = ref}
      >
      {marker}

       <MapViewDirections
    origin={this.state.origin}
    destination={this.state.destination}
    apikey={GOOGLE_MAPS_APIKEY}
    mode="walking"
    strokeWidth={3}
    strokeColor="orange"
  />
      
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

{Users}

<FooterApp navigation={this.props.navigation} />

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