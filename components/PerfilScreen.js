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
import FooterApp from './FooterTab';


class PerfilScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  componentWillMount() {
    // axios
    //   .get("http://ptua.desenvolvimento/api/comentarioNoticia/1")
    //   .then(response => {
    //     this.setState({ comenta23: response.data });
    //   })
    //   .catch(function(error) {
    //     alert(error);
    //   });

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
          content={<SideBar navigator={this.navigator}  navigation={this.props.navigation} />}
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
            <Content></Content>
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
