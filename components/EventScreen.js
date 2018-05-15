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

import { ImagePicker } from "expo";

// import Pusher from "pusher-js/react-native";

import FooterApp from "./FooterTab";

class EventScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      criaEB: false,
      titulo: '',
      mensagem: '',
      local: '',
      data: '',
      pickedImaged: {},
    };
  }

  pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);
    if (!result.cancelled) {
      this.setState({
        pickedImaged: { uri: result.uri }
      });
    }
  };

  cEvento = async (titulo, descricao, data, local ) => {
    const formData = new FormData();
    if (this.state.pickedImaged !== undefined) {
      formData.append("eventimg", {
        uri: this.state.pickedImaged.uri,
        type: "file", // or photo.type
        name: "eventimg"
      });
    }
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("data", data);
    formData.append("local", local);
    fetch("http://ptua.tk/api/eventos", {
      method: "post",
      body: formData
    }).then(res => {
     this.props.fetchEventos();
    });

    this.setState({
      criaEB: false,
      pickedImaged: {},
      titulo: '',
      descricao: '',
      data: '',
      local: '',
    });

  };



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
                onChangeText={titulo =>
                this.setState({ titulo })}
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
                  onChangeText={descricao =>
                this.setState({ descricao })}
                value={this.state.descricao} ref="descricao"
           
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
                 onChangeText={data=>
                this.setState({ data })}
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
                 onChangeText={local =>
                this.setState({ local })}
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
               onPress={() => this.cEvento(this.state.titulo, this.state.descricao, this.state.data, this.state.local )}
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
                          `http://ptua.tk/storage/eventos/${evento.id_evento}/imagem1.jpg`
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
