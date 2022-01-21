import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Content, List, Container, ListItem, Text} from 'native-base';
import Video from 'react-native-video';

//import NavigationBar from 'react-native-navigation-bar';

const AboutPage = () => {
  const navigation = useNavigation();
  const [paused, setPaused] = useState(true);
  const togglePaused = () => setPaused((prev) => !prev);

  return (
    <Container>
      <Content>
        <View>
          <Text style={styles.titleStyle}>Our Program</Text>
          <Text style={styles.articleStyle}>
            Bal is Hindi for Child, which is exactly who we had in mind when we
            put together this program. It all started with a Preschool yoga
            class, where parents approached us to see how they could continue
            their children’s growth at home.
          </Text>

          <Text style={styles.articleStyle}>
            After a two-year journey, we are proud to present the Bal Yoga for
            Kids book, music and video series. In this program, we have combined
            traditional yoga poses, familiar childhood melodies and whimsical
            illustrations to familiarize children with the alphabet while
            strengthening their bodies and minds.
          </Text>
          <Text style={styles.articleStyle}>
            Our experience as Early Childhood Educators and years of practicing
            yoga combine to create a positive energy, which we hope to nurture
            in young children through this program.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: '5%',
              paddingBottom: '5%',
              fontSize: 15,
            }}>
            Namaste, Glenda Kacev & Sylvia Roth
          </Text>
          <TouchableWithoutFeedback onPress={togglePaused}>
            <Video
              pictureInPicture={false}
              audioOnly={false}
              source={require('./videos/about_authors.mp4')}
              style={styles.backgroundVideo}
              controls={true}
              resizeMode={'contain'}
              paused={paused}
            />
          </TouchableWithoutFeedback>
        </View>
      </Content>
    </Container>
  );
};
const windowWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    paddingTop: '5%',
    fontSize: 30,
    fontFamily: 'ChalkboardSE-Light',
  },
  articleStyle: {
    textAlign: 'center',
    paddingTop: '2%',
    fontSize: 15,
    margin: 10,
  },
  backgroundVideo: {
    position: 'relative',
    paddingTop: '100%',
    width: windowWidth,
  },
});

export default AboutPage;
