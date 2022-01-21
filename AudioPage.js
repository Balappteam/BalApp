import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';
import {Content, List, Container, ListItem, Text} from 'native-base';

//import NavigationBar from 'react-native-navigation-bar';

const AudioList = () => {
  const navigation = useNavigation();
  return (
    <Container style={{backgroundColor: '#fff'}}>
      <Content>
        <List>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/01_Welcome.mp4'),
              })
            }>
            <Text style={{color: 'red'}}>Welcome</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/02_Namaste.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Namaste</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/03_Om_Shanti.mp4'),
              })
            }>
            <Text style={{color: 'green'}}>Om Shanti</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/04_Pranayama.mp4'),
              })
            }>
            <Text style={{color: 'blue'}} >Pranayama</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/05_Airplane.mp4'),
              })
            }>
            <Text style={{color: 'orange'}}>Airplane</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/06_Boat.mp4'),
              })
            }>
            <Text style={{color: 'purple'}}>Boat</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/07_Camel.mp4'),
              })
            }>
            <Text style={{color: 'red'}}>Camel</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/08_Dog.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Dog</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/09_Elephant.mp4'),
              })
            }>
            <Text style={{color: 'green'}}>Elephant</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/10_Frog.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Frog</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/11_Giraffe.mp4'),
              })
            }>
            <Text style={{color: 'orange'}}>Giraffe</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/12_Horse.mp4'),
              })
            }>
            <Text style={{color: 'purple'}}>Horse</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/13_Ice_Cream.mp4'),
              })
            }>
            <Text style={{color: 'red'}}>Ice Cream</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/14_Jelly_Sandwich.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Jelly Sandwich</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/15_Kangaroo.mp4'),
              })
            }>
            <Text style={{color: 'green'}}>Kangaroo</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/16_Ladybug.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Ladybug</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio//17_Mouse.mp4'),
              })
            }>
            <Text style={{color: 'orange'}}>Mouse</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/18_Nightingale.mp4'),
              })
            }>
            <Text style={{color: 'purple'}}>Nightingale</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/19_Owl.mp4'),
              })
            }>
            <Text style={{color: 'red'}}>Owl</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/20_Pretzel.mp4'),
              })
            }>
            <Text style={{color: 'lightblue'}}>Pretzel</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/21_Quiet.mp4'),
              })
            }>
            <Text style={{color: 'green'}}>Quiet</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/22_Rabbit.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Rabbit</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/23_Swan.mp4'),
              })
            }>
            <Text style={{color: 'orange'}}>Swan</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/24_Tortoise.mp4'),
              })
            }>
            <Text style={{color: 'purple'}}>Tortoise</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/25_Umbrella.mp4'),
              })
            }>
            <Text style={{color: 'red'}}>Umbrella</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/26_Vase.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>Vase</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/27_Wheel.mp4'),
              })
            }>
            <Text style={{color: 'green'}}>Wheel</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/28_X_Marks_The_Spot.mp4'),
              })
            }>
            <Text style={{color: 'blue'}}>X Marks The Spot</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/29_Yoga.mp4'),
              })
            }>
            <Text style={{color: 'orange'}}>Yoga</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/30_Zebra.mp4'),
              })
            }>
            <Text style={{color: 'purple'}}>Zebra</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Audio Player', {
                audioURL: require('./audio/31_Savasana.mp4'),
              })
            }>
            <Text style={{color: 'red'}}>Savasana</Text>
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

export default AudioList;
