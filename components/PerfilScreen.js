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

import HTMLView from "react-native-htmlview";

// import { connect } from "react-redux";

// import { bindActionCreators } from "redux";
// import {
//   fetchNoticias,
//   fetchLikes,
//   giveLike,
//   fetchComentarios,
//   comentaNoticia
// } from "./actions";

// import ComentarioNoticia from './ComentarioNoticia';
import FooterApp from "./FooterTab";

class PerfilScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      ua: "",
      ue: "",
      ut: "",
      id: ""
    };
  }

  async componentWillMount() {
    // axios
    //   .get("http://ptua.desenvolvimento/api/comentarioNoticia/1")
    //   .then(response => {
    //     this.setState({ comenta23: response.data });
    //   })
    //   .catch(function(error) {
    //     alert(error);
    //   });

    const ua = await AsyncStorage.getItem("username");
    const ue = await AsyncStorage.getItem("useremail");
    const ut = await AsyncStorage.getItem("userType");
    const id = await AsyncStorage.getItem("id");

    if (ua && ue && ut && id) {
      this.setState({
        ua,
        ue,
        ut,
        id
      });
    } else {
      alert("esperando");
    }

    //   uname = async () => {
    //       try {
    //    const ua = await AsyncStorage.getItem("username");
    //     const ue = await AsyncStorage.getItem("useremail");
    //     const ut = await AsyncStorage.getItem("userType");
    //     const id = await AsyncStorage.getItem("id");
    //   if ( !== null){

    //    alert('funcionou');
    //   }
    // } catch (error) {
    //   alert('deu merda');
    // }
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  //   uname = async postid => {
  //     const ua = await AsyncStorage.getItem("username");
  //     const ue = await AsyncStorage.getItem("useremail");
  //     const ut = await AsyncStorage.getItem("userType");
  //     const id = await AsyncStorage.getItem("id");

  //   };

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
              <Title>Perfil</Title>
            </Body>
            <Right>
              <Button transparent>{/*<Icon name='arrow-back' />*/}</Button>
            </Right>
          </Header>

          <Container>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{this.state.ua}</Text>
                      <Text note>{this.state.ut}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        "https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/16730145_661435734066944_2259181377204724691_n.jpg?_nc_cat=0&oh=33a7b9814af346c739bbe89d8be58669&oe=5B6AF379"
                    }}
                    style={{ height: 400, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Text>12 Noticias</Text>
                  </Left>
                  <Body>
                    <Text>4 Comentários</Text>
                  </Body>
                  <Right>
                    <Text>4 Dúvidas</Text>
                  </Right>
                </CardItem>
              </Card>
              <Button block info style={{ marginTop: 15}}>
                <Text>Mudar dados</Text>
              </Button>
              <Button block danger style={{ marginTop: 15}}>
                <Text>Apagar conta</Text>
              </Button>
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

export default PerfilScreen;

// function mapStateToProps(state) {
//   return {
//     comentarios: state.comentarios,
//     noticias: state.noticias,
//     likes: state.likes
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchNoticias, fetchLikes, giveLike, fetchComentarios, comentaNoticia },
//     dispatch
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);