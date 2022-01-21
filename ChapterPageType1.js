import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';
import {Content, List, Container, ListItem, Text} from 'native-base';

//import NavigationBar from 'react-native-navigation-bar';

const ChapterScreen = () => {
  const navigation = useNavigation();
  return (
    <Container style={{backgroundColor: '#fff'}}>
      <Content>
        <List>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/06.jpg'),
                chapterURL2: require('./images/Chapterimgs/07.jpg'),
                audioURL: require('./audio/02_Namaste.mp4'),
              })
            }>
            <Text style={{color: 'red', fontFamily: 'ChalkboardSE-Light'}}>Namaste</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/08.jpg'),
                chapterURL2: require('./images/Chapterimgs/09.jpg'),
                audioURL: require('./audio/03_Om_Shanti.mp4'),
              })
            }>
            <Text style={{color: 'darkgreen', fontFamily: 'ChalkboardSE-Light'}}>Oh Shanti</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/10.jpg'),
                chapterURL2: require('./images/Chapterimgs/11.jpg'),
                audioURL: require('./audio/04_Pranayama.mp4'),
              })
            }>
            <Text style={{color: 'darkblue', fontFamily: 'ChalkboardSE-Light'}}> Pranayama Song</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/12.jpg'),
                chapterURL2: require('./images/Chapterimgs/13.jpg'),
                audioURL: require('./audio/05_Airplane.mp4'),
              })
            }>
            <Text style={{color: 'darkred', fontFamily: 'ChalkboardSE-Light'}}>Airplane Pose 1</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/14.jpg'),
                chapterURL2: require('./images/Chapterimgs/15.jpg'),
                audioURL: require('./audio/06_Boat.mp4'),
              })
            }>
            <Text style={{color: 'darkblue', fontFamily: 'ChalkboardSE-Light'}}>Boat Pose 2</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/16.jpg'),
                chapterURL2: require('./images/Chapterimgs/17.jpg'),
                audioURL: require('./audio/07_Camel.mp4'),
              })
            }>
            <Text style={{color: 'darkgreen', fontFamily: 'ChalkboardSE-Light'}}>Camel Pose 3</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/18.jpg'),
                chapterURL2: require('./images/Chapterimgs/19.jpg'),
                audioURL: require('./audio/08_Dog.mp4'),
              })
            }>
            <Text style={{color: 'darkblue',fontFamily: 'ChalkboardSE-Light'}}>Dog Pose 4</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/20.jpg'),
                chapterURL2: require('./images/Chapterimgs/21.jpg'),
                audioURL: require('./audio/09_Elephant.mp4'),
              })
            }>
            <Text style={{color: 'darkorange',fontFamily: 'ChalkboardSE-Light'}}>Elephant Pose 5</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/22.jpg'),
                chapterURL2: require('./images/Chapterimgs/23.jpg'),
                audioURL: require('./audio/10_Frog.mp4'),
              })
            }>
            <Text style={{color: 'darkgreen',fontFamily: 'ChalkboardSE-Light'}}>Frog Pose 6</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/23.jpg'),
                chapterURL2: require('./images/Chapterimgs/22.jpg'),
                audioURL: require('./audio/11_Giraffe.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Giraffe Pose 7</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/26.jpg'),
                chapterURL2: require('./images/Chapterimgs/27.jpg'),
                audioURL: require('./audio/12_Horse.mp4'),
              })
            }>
            <Text style={{color: 'purple',fontFamily: 'ChalkboardSE-Light'}}>Horse Pose 8</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/28.jpg'),
                chapterURL2: require('./images/Chapterimgs/29.jpg'),
                audioURL: require('./audio/13_Ice_Cream.mp4'),
              })
            }>
            <Text style={{color: 'darkblue',fontFamily: 'ChalkboardSE-Light'}}>Ice Cream Pose 9</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/30.jpg'),
                chapterURL2: require('./images/Chapterimgs/31.jpg'),
                audioURL: require('./audio/14_Jelly_Sandwich.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Jelly Sandwich Pose 10</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/32.jpg'),
                chapterURL2: require('./images/Chapterimgs/33.jpg'),
                audioURL: require('./audio/15_Kangaroo.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Kangaroo Pose 11</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/34.jpg'),
                chapterURL2: require('./images/Chapterimgs/35.jpg'),
                audioURL: require('./audio/16_Ladybug.mp4'),
              })
            }>
            <Text style={{color: 'darkred',fontFamily: 'ChalkboardSE-Light'}}>Ladybug Pose 12</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/36.jpg'),
                chapterURL2: require('./images/Chapterimgs/37.jpg'),
                audioURL: require('./audio/17_Mouse.mp4'),
              })
            }>
            <Text style={{color: 'darkgreen',fontFamily: 'ChalkboardSE-Light'}}>Mouse Pose 13</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/38.jpg'),
                chapterURL2: require('./images/Chapterimgs/39.jpg'),
                audioURL: require('./audio/18_Nightingale.mp4'),
              })
            }>
            <Text style={{color: 'darkblue',fontFamily: 'ChalkboardSE-Light'}}>Nightingale Pose 14</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/40.jpg'),
                chapterURL2: require('./images/Chapterimgs/41.jpg'),
                audioURL: require('./audio/19_Owl.mp4'),
              })
            }>
            <Text style={{color: 'blue',fontFamily: 'ChalkboardSE-Light'}}>Owl Pose 15</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/42.jpg'),
                chapterURL2: require('./images/Chapterimgs/43.jpg'),
                audioURL: require('./audio/20_Pretzel.mp4'),
              })
            }>
            <Text style={{color: 'purple',fontFamily: 'ChalkboardSE-Light'}}>Pretzel Pose 16</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/44.jpg'),
                chapterURL2: require('./images/Chapterimgs/45.jpg'),
                audioURL: require('./audio/21_Quiet.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Quiet Pose 17</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/46.jpg'),
                chapterURL2: require('./images/Chapterimgs/47.jpg'),
                audioURL: require('./audio/22_Rabbit.mp4'),
              })
            }>
            <Text style={{color: 'darkblue',fontFamily: 'ChalkboardSE-Light'}}>Rabbit Pose 18</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/48.jpg'),
                chapterURL2: require('./images/Chapterimgs/49.jpg'),
                audioURL: require('./audio/23_Swan.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Swan Pose 19</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/50.jpg'),
                chapterURL2: require('./images/Chapterimgs/51.jpg'),
                audioURL: require('./audio/24_Tortoise.mp4'),
              })
            }>
            <Text style={{color: 'darkgreen',fontFamily: 'ChalkboardSE-Light'}}>Tortoise Pose 20</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/52.jpg'),
                chapterURL2: require('./images/Chapterimgs/53.jpg'),
                audioURL: require('./audio/25_Umbrella.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Umbrella Pose 21</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/54.jpg'),
                chapterURL2: require('./images/Chapterimgs/55.jpg'),
                audioURL: require('./audio/26_Vase.mp4'),
              })
            }>
            <Text style={{color: 'darkgreen',fontFamily: 'ChalkboardSE-Light'}}>Vase Pose 22</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/56.jpg'),
                chapterURL2: require('./images/Chapterimgs/57.jpg'),
                audioURL: require('./audio/27_Wheel.mp4'),
              })
            }>
            <Text style={{color: 'darkblue',fontFamily: 'ChalkboardSE-Light'}}>Wheel Pose 23</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/58.jpg'),
                chapterURL2: require('./images/Chapterimgs/59.jpg'),
                audioURL: require('./audio/28_X_Marks_The_Spot.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>X Marks The Spot Pose Pose 24</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/60.jpg'),
                chapterURL2: require('./images/Chapterimgs/61.jpg'),
                audioURL: require('./audio/29_Yoga.mp4'),
              })
            }>
            <Text style={{color: 'darkblue',fontFamily: 'ChalkboardSE-Light'}}>Yoga Pose 25</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/62.jpg'),
                chapterURL2: require('./images/Chapterimgs/63.jpg'),
                audioURL: require('./audio/30_Zebra.mp4'),
              })
            }>
            <Text style={{color: 'darkred',fontFamily: 'ChalkboardSE-Light'}}>Zebra Pose 26</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/64.jpg'),
                chapterURL2: require('./images/Chapterimgs/65.jpg'),
                audioURL: require('./audio/31_Savasana.mp4'),
              })
            }>
            <Text style={{color: 'orange',fontFamily: 'ChalkboardSE-Light'}}>Savasana</Text>
          </ListItem>
          <ListItem
            style={styles.listStyle}
            onPress={() =>
              navigation.navigate('Chapter Viewer', {
                chapterURL: require('./images/Chapterimgs/66.jpg'),
                chapterURL2: require('./images/Chapterimgs/66.jpg'),
              })
            }>
            <Text style={{color: 'black',fontFamily: 'ChalkboardSE-Light'}}>Glossary</Text>
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

export default ChapterScreen;
