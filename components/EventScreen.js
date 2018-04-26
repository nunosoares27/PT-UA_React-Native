import React, { Component } from "react";
import { StyleSheet, Image, View, AsyncStorage, TouchableOpacity } from "react-native";
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
import { fetchEventos } from "./actions";

import SideBar from "./Sidebar";

import axios from "axios";

// import Pusher from "pusher-js/react-native";

import FooterApp from "./FooterTab";

class EventScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      criaEB: false,
    };
  }

  componentWillMount() {
    this.props.fetchEventos();
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
              <Title>Eventos</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.setState({criaEB: !this.state.criaEB,})}>
             {this.state.criaEB ? <Ionicons name="ios-close-circle" size={32} /> : <Ionicons name="ios-add-circle" size={32} />} 
             </TouchableOpacity>
            </Right>
          </Header>

          <Container>
            <Content>

            {this.state.criaEB ? ( <Content>
              <Item
                rounded
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 15,
                  marginRight: 15,
                  backgroundColor: "#BDC3C7"
                }}
              >
                <Input autoCorrect={false} placeholder="Titulo..." 
                value={this.state.titulo} ref="titulo"
           
                />
              </Item>
                            <Item
                rounded
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 15,
                  marginRight: 15,
                  backgroundColor: "#BDC3C7"
                }}
              >
                <Input autoCorrect={false} placeholder="Conteúdo..." 
                value={this.state.mensagem} ref="mensagem"
           
                />
              </Item>
                            <Item
                rounded
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 15,
                  marginRight: 15,
                  backgroundColor: "#BDC3C7"
                }}
              >
                <Input autoCorrect={false} placeholder="Data..." 
                value={this.state.data} ref="data"
           
                />
              </Item>

                            <Item
                rounded
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 15,
                  marginRight: 15,
                  backgroundColor: "#BDC3C7"
                }}
              >
                <Input autoCorrect={false} placeholder="Local..." 
                value={this.state.local} ref="local"
           
                />
              </Item>


               <Button
                        block
                        info
                        style={{
                          marginTop: 15,
                          marginRight: 15,
                          marginLeft: 25
                        }}
                         onPress={this.pickImageHandler}
                      >
                        <Text>Escolher Imagem</Text>
                      </Button>



              <Button
                success
                style={{
                  marginTop:15,
                  marginBottom: 15,
                  marginLeft: 20,
                  marginRight: 15
                }}
               
              >
                <Text> Enviar </Text>
              </Button> 
              </Content>)  :  <Text></Text> }
             
          

              <List>
                {this.props.eventos.map(evento => (
                  <ListItem key={evento.id_evento}>
                    <Thumbnail
                      square
                      size={100}
                      source={{
                        uri:
                          "https://univercidade.pt/wp-content/uploads/2018/04/GRETUA-39.%C2%BA-400x300.png"
                      }}
                    />
                    <Body>
                      <Text>{evento.titulo}</Text>
                      <Text note>{evento.descricao}</Text>
                      <Text>Local: {evento.local}</Text>
                      <Text>Data: {evento.data}</Text>
                    </Body>
                  </ListItem>
                ))}
              </List>
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
  return {
    eventos: state.eventos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEventos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
