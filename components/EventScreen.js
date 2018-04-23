import React, { Component } from "react";
import { StyleSheet, Image, View, AsyncStorage } from "react-native";

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

import SideBar from "./Sidebar";

import axios from "axios";

import Pusher from "pusher-js/react-native";


import FooterApp from "./FooterTab";


export default class EventScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentWillMount() {

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
              <Button transparent>{/*<Icon name='arrow-back' />*/}</Button>
            </Right>
          </Header>

          <Container>
            <Content>
              <List>

                  <ListItem>
              <Thumbnail square size={100} source={{ uri: 'https://univercidade.pt/wp-content/uploads/2018/04/GRETUA-39.%C2%BA-400x300.png' }} />
              <Body>
                <Text>Gretua 2020</Text>
                <Text note>O Grupo Experimental de Teatro da Universidade de Aveiro celebrará, de 6 a 14 de Abril, o seu 39º aniversário com cerca de vinte eventos espalhados pela ...</Text>
              </Body>
            </ListItem>

              <ListItem>
              <Thumbnail square size={100} source={{ uri: 'http://www.drinksdiary.com/wp-content/uploads/2017/07/baristas.jpg' }} />
              <Body>
                <Text>A Biblioteca dá-te música</Text>
                <Text note>No dia 18 de setembro de 2017, o American Corner da UA convidou toda a comunidade Académica a assistir ao concerto com a banda Nuno Andrade Blues Drive. O evento foi inserido no programa de acolhimento aos novos alunos 2017/2018.</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Thumbnail square size={100} source={{ uri: 'https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/12963666_1082534165118311_3287974336817903072_n.jpg?_nc_cat=0&oh=f126e0b96aaa9bd429881f3e53801eb4&oe=5B56AA89' }} />
              <Body>
                <Text>Enterro 2030</Text>
                <Text note>Local: Parque de Feiras e Exposições.
Data: De 6 a 12 de maio.
</Text>
              </Body>
            </ListItem>



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
