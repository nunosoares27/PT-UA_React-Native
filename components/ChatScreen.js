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

// import HTMLView from "react-native-htmlview";

// import { connect } from "react-redux";

// import { bindActionCreators } from "redux";
// import {
//   fetchNoticias,
//   fetchLikes,
//   giveLike,
//   fetchComentarios,
//   comentaNoticia
// } from "./actions";

// import ComentarioNoticia from "./ComentarioNoticia";
import FooterApp from "./FooterTab";
// import CriarNoticia from "./CriarNoticia";

export default class ChatScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
     chatDados : [],
    };
  }

  componentWillMount() {
   
    axios
      .get("http://ptua.desenvolvimento/api/chat")
      .then(response => {
        this.setState({ chatDados: response.data });
        console.log(this.state.chatDados);
      })
      .catch(function(error) {
        alert(error);
      });
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  uname = async postid => {
    const ua = await AsyncStorage.getItem("username");
    const ue = await AsyncStorage.getItem("useremail");
    const ut = await AsyncStorage.getItem("userType");
    const id = await AsyncStorage.getItem("id");
  
    // axios
    //   .post("http://ptua.desenvolvimento/api/likenoticia", {
    //     id_noticia: postid,
    //     user_id: id
    //   })
    //   .then(async response => {

    //     this.setState({});
    //   });
  };

 
  render() {
    const CHATCONTENT = 
    this.state.chatDados.map(chat => (

            <ListItem avatar key={chat.id}>
              <Left>
                <Thumbnail source={{ uri: "https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/16730145_661435734066944_2259181377204724691_n.jpg?_nc_cat=0&oh=33a7b9814af346c739bbe89d8be58669&oe=5B6AF379" }} />
              </Left>
              <Body>
                <Text>{chat.utilizador_nome}</Text>
                <Text note>{chat.utilizador_mensagem}</Text>
              </Body>
              {/*<Right>
                <Text note>3:43 pm</Text>
              </Right>*/}
            </ListItem>


          ))
    ;

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
              <Title>Chat</Title>
            </Body>
            <Right>
              <Button transparent>{/*<Icon name='arrow-back' />*/}</Button>
            </Right>
          </Header>

          <Container>
             <Content>
          
          <List>
          
          {CHATCONTENT}
            
 
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
