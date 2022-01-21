import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={styles.logo}
        source={{uri: 'https://via.placeholder.com/150'}}
      />
      <Text style={styles.titleText}>BAL YOGA</Text>
      <Text style={styles.bottomText}>For Kids</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignItems:'center',
    borderRadius: 360,
  },

  titleText: {
    fontSize: 30,
    color: 'orange',
    paddingTop: 100,
  },
  bottomText: {
    fontSize: 15,
    color: 'red',
    paddingTop: 15,
  },
});

export default SplashScreen;
