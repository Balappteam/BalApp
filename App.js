import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomePage';
import ChapterScreen from './components/ChapterPageType1';
import VideoList from './components/VideoPage';
import VideoPlayer from './components/VideoPlayerScreen';
import AudioList from './components/AudioPage';
import AudioPlayer from './components/AudioPlayerScreen';
import ChapterViewer from './components/ChapterViewer';
import IndexScreen from './components/IndexPage';
import AboutScreen from './components/AboutPage';
// work on index screen fix error
import {Button, Icon} from 'native-base';

function HomePage() {
  return <HomeScreen />;
}

/*function SplashPage() { not being used
  return <SplashScreen />;
}*/

function ChapterPageType1() {
  return <ChapterScreen />;
}

function VideoPage() {
  return <VideoList />;
}
function VideoPlayerScreen() {
  return <VideoPlayer />;
}
function AudioPage() {
  return <AudioList />;
}

function AudioPlayerScreen() {
  return <AudioPlayer />;
}

function ChapterViewerScreen() {
  return <ChapterViewer />;
}

function IndexPage() {
  return <IndexScreen />;
}

function AboutPage() {
  return <AboutScreen />;
}

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 40, height: 40}}
      source={require('./components/images/headerIcon.png')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomePage}
          options={{
            headerTitle: (props) => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#360904',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
        />
        <Stack.Screen
          name="Chapters Page"
          component={ChapterPageType1}
          options={{
            title: 'Chapters',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
        <Stack.Screen
          name="Index Page"
          component={IndexPage}
          options={{
            title: 'Index',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
        <Stack.Screen
          name="Video List"
          component={VideoPage}
          options={{
            title: 'Videos',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
        <Stack.Screen
          name="About Page"
          component={AboutPage}
          options={{
            title: 'About Us',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />

        <Stack.Screen
          name="Video Player"
          component={VideoPlayerScreen}
          options={{
            title: 'Video',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
        <Stack.Screen
          name="Audio Player"
          component={AudioPlayerScreen}
          options={{
            title: 'Audio Player',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
        <Stack.Screen
          name="Chapter Viewer"
          component={ChapterViewerScreen}
          options={{
            title: 'Chapters',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
        <Stack.Screen
          name="Audio List"
          component={AudioPage}
          options={{
            title: 'CD List',
            headerTitleAlign: 'center',
            headerStyle: {
              //backgroundColor: '#360904',
              borderBottomWidth: 2,
              borderBottomColor: '#360904',
            },
            headerTitleStyle: {
              fontFamily: 'ChalkboardSE-Light',
            },
            headerTintColor: '#360904',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
