import React from 'react';
import FrontPage from './FrontPage'
import StartingStory from './StartingStory'
import MissionPage from './MissionPage'
import Location from './Location'

import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});



const TopNavigator = StackNavigator({
  FrontPage: { screen: FrontPage},
  StartingStory: {screen: StartingStory},
  MissionPage: {screen: MissionPage},
  Location: {screen: Location}
});

AppRegistry.registerComponent('TopNavigator', () => TopNavigator);
