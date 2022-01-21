import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {Content, List, Container, ListItem, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';


//import NavigationBar from 'react-native-navigation-bar';

const IndexPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <List>
          <ListItem
            style={styles.listStyle}
             onPress={() => {
              navigation.navigate('Video Player', {
                videoURL: require('./videos/balyogabook.mp4'),
                other: 'nothing',
              });
            }}>
            
            <Icon style={{marginRight: 10}} name="book" size={30} color='#F87217' />
            <Text style={styles.textStyle}>
              Audio Book  
            </Text>
            

          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() => {
              navigation.navigate('Video Player', {
                videoURL: require('./videos/Balyoga.mp4'),
                other: 'nothing',
              });
            }}>
              <Icon style={{marginRight: 10}} name="video" size={30} color='#1569C7'/>
            <Text style={styles.textStyle}>
              Full Video
              </Text>
            
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() => {
              navigation.navigate('Chapters Page');
            }}>
               <Icon style={{marginRight: 10}} name="book-open" size={30} color='#667C26' />
            <Text style={styles.textStyle}>
              Chapters
            </Text>
           
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() => {
              navigation.navigate('About Page');
            }}>
            <Icon style={{marginRight: 10}} name="info-circle" size={30} color="#360904" />
            <Text style={styles.textStyle}>
              About Us
            </Text>
            
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 60,
    //fontFamily: 'Comic Sans MS, Comic Sans, cursive',
  },
  textStyle: {
    fontWeight: 'bold', 
    textAlign: 'center',
    fontFamily: 'ChalkboardSE-Light',


  }
});

export default IndexPage;
