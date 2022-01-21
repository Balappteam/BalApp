import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  rou,
  ImageBackground,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height - 20;

const AudioPlayer = () => {
  const route = useRoute();
  const {audioURL} = route.params;
  const [paused, setPaused] = useState(true);
  const togglePaused = () => setPaused((prev) => !prev);

  const CircleButton = (props) => (
    <TouchableOpacity
      style={{
        margin: props.margin,
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: props.size * 2,
      }}
      onPress={props.onPress}>
      <Text style={{color: props.textColor, fontSize: props.fontSize}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
      }}>
      <CircleButton
        text="Play"
        size={200}
        color="orange"
        textColor="white"
        margin={10}
        fontSize={20}
        onPress={togglePaused}
      />
      <Video
        source={audioURL}
        //style={styles.backgroundVideo}
        audioOnly={true}
        controls={true}
        playInBackground={true}
        //fullscreen={true}
        paused={paused}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {},
  titleStyle: {
    //alignItems: 'center',
    resizeMode: 'contain',
    height: 10,
    width: 10,

    fontSize: 50,
  },
  ImageBackground: {
    height: windowHeight,
    width: windowWidth,
  },
});

export default AudioPlayer;
