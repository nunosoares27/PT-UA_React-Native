import React, {Component} from 'react';
import { StyleSheet, Image, View 
 } from 'react-native';

 import { Container, Header, Content, Card, CardItem, Thumbnail, 
   Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Title } from 'native-base';



export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      
    };

  }


  render() {
  
    return (

      <View style={{ flex: 1, width: '100%'}}>
       
 <Container >
         <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Notícias</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>


        <Content >


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require ('./images/user_logo1.png')} />
                <Body>
                  <Text>Nuno Soares</Text>
                  <Text note>O poder do React Native</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
               <Image source={require( './images/post1.png')} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>
              </CardItem>
            <CardItem >
              <Body>
               
              <Text>
                  blafsadlmksadklsamdklasmdklasmkldsamkdlkmasdmklasdmlkaslkdasmkdas
                  sakdmakdamlsdmlakdmklsamdklsamdklasmdkasmdklasdmkaldmaklsdmkasdmklas
                  kamsdlkadmklsadmlkamdkaldmalksdmaldkasmkdlamskdlsamkdmaklsdlka
                </Text>
                </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text style={{paddingLeft: 5}}>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>


  <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require ('./images/user_logo1.png')} />
                <Body>
                  <Text>Nuno Soares</Text>
                  <Text note>O poder do React Native</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
               <Image source={require( './images/post1.png')} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>
              </CardItem>
            <CardItem >
              <Body>
               
              <Text>
                  blafsadlmksadklsamdklasmdklasmkldsamkdlkmasdmklasdmlkaslkdasmkdas
                  sakdmakdamlsdmlakdmklsamdklsamdklasmdkasmdklasdmkaldmaklsdmkasdmklas
                  kamsdlkadmklsadmlkamdkaldmalksdmaldkasmkdlamskdlsamkdmaklsdlka
                </Text>
                </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text style={{paddingLeft: 5}}>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>



  </Content>
  </Container> 



          <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>


</View>
      
     


    );
  }
}

const styles = StyleSheet.create({
  
});