import React, {Component} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import {Button, Container} from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Props} from 'react-native-image-zoom-viewer/built/image-viewer.type';

const ChapterViewer = () => {
  var pause = true;
  const navigation = useNavigation();
  const route = useRoute();
  const {chapterURL, chapterURL2, audioURL} = route.params;
  const images = [
    {
      // fill url with url link if neccesary.
      url: '',
      //width: 50,
      //height: 50, You can add width and height if you need.
      // can add props to images here
      props: {
        // headers: ...
        source: chapterURL,
      },
    },
    {
      url: '',
      props: {
        source: chapterURL2,
      },
    },
  ];

  return (
    <Container>
      <Video
        source={audioURL}
        //style={styles.backgroundVideo}
        audioOnly={true}
        controls={true}
        playInBackground={true}
        paused={false}
      />
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={() => this.setState({modalVisible: false})}>
        <ImageViewer
          backgroundColor="white"
          imageUrls={images}
          enableSwipeDown={true}
          onSwipeDown={() => {
            navigation.navigate('Chapters Page');
          }}
          renderHeader={() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Chapters Page');
                }}>
                <Text
                  style={{
                    paddingTop: 50,
                    paddingLeft: 30,
                    fontSize: 20,
                    color: '#360904',
                  }}
                  onPress={() => {
                    navigation.navigate('Chapters Page');
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </Modal>
    </Container>
  );
};

//const styles = StyleSheet.create({});

export default ChapterViewer;
