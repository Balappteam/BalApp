import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {Content, List, Container, ListItem, Text} from 'native-base';

//import NavigationBar from 'react-native-navigation-bar';

const VideoList = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <List>
          <ListItem
            style={styles.listStyle}
            onPress={() => {
              navigation.navigate('Video Player', {
                videoURL: require('./videos/Balyoga.mp4'),
                other: 'nothing',
              });
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              Video 1
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
   
  },
});

export default VideoList;
