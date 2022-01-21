import React, {Component} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Text, View, Image} from 'react-native';
import Video from 'react-native-video';
import {Container} from 'native-base';

const VideoPlayer = () => {
  const route = useRoute();
  const {videoURL} = route.params;
  return (
    <Container>
      <Video
        pictureInPicture={false}
        //audioOnly={true}
        source={videoURL}
        style={styles.backgroundVideo}
        controls={true}
        //resizeMode={'cover'}
        fullscreen={true}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  }
});

export default VideoPlayer;
