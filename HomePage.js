import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View key={'page0'} style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('./images/testBubble.png')}>
          <Text style={styles.text}>Namaste</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              return navigation.navigate('Index Page');
            }}>
            <Image
              source={require('./images/balbook.jpg')}
              style={styles.imageChapter}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity
            onPress={() => {
              return navigation.navigate('Index Page');
            }}>
            <Icon
              style={styles.playButton}
              name="play-circle"
              size={80}
              color="#800000"
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    paddingTop: '30%',
    fontSize: 35,
    color: '#800000',
    fontWeight: 'bold',
    fontFamily: 'ChalkboardSE-Light',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

    //padding: 20,
  },
  imageChapter: {
    //flex: 1,
    resizeMode: 'contain',
    height: '40%',
    width: '90%',
    margin: '5%',
    //borderRadius: 20,

    //padding:20,
    //paddingBottom: '25%',
  },
  playButton: {
    textAlign: 'center',
    paddingTop: '5%',
    //fontSize: 35,
    color: '#800000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
