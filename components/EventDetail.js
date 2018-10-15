import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab,
  Title,
  Drawer,
  Item,
  Input,
  List,
  ListItem
} from "native-base";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { fetchEventoDetail } from "./actions";

import SideBar from "./Sidebar";

import axios from "axios";

import { ImagePicker } from "expo";

// import Pusher from "pusher-js/react-native";

import FooterApp from "./FooterTab";

class EventDetail extends Component {
  static navigationOptions = { header: null };

  componentWillMount() {
      const id_evento = this.props.navigation.getParam('id_evento');
      this.props.fetchEventoDetail(id_evento);
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={
            <SideBar
              navigator={this.navigator}
              navigation={this.props.navigation}
            />
          }
          onClose={() => this.closeDrawer()}
          style={{ width: "100%" }}
        >
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Evento</Title>
            </Body>
            <Right>
            <Button
                transparent
                onPress={() => this.props.navigation.navigate("EventScreen")}
              >
                <Icon name="arrow-back" />
              </Button>
            </Right>
          </Header>

          <Container>
            <Content>
    
            { this.props.evento.eventoHasImagem1 === 1 ? (
            <Image source={{ uri:  `http://ptua.tk/storage/eventos/${this.props.evento.id_evento}/imagem1.jpg` }} style={{ height: 250, width: Dimensions.get('window').width, resizeMode: 'contain', backgroundColor: 'black',}} 
            />
            )  : '' }
            <Text>Nome do Evento: {this.props.evento.titulo}</Text>
            <Text>Descrição do Evento:{this.props.evento.descricao}</Text>
            <Text>Data do Evento: {this.props.evento.data}</Text>
            <Text>Local do Evento: {this.props.evento.local}</Text>

            </Content>
          </Container>

          <FooterApp navigation={this.props.navigation} />
        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NT: {
    fontWeight: "800",
    fontSize: 25
  }
});

function mapStateToProps(state) {
   
    console.log(state.eventos[1].titulo )
  return {
    evento: state.eventos[1]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEventoDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
