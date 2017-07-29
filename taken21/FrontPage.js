import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FrontPage extends React.Component {
	static navigationOptions = {
	  title: 'Welcomeqweqweqweqweqqwe',
	};
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>BREAKOUT</Text>
        <Button 
        	title="New Game"
        	onPress={() => navigate('StartingStory')} />
        <Button 
        title="Continue"
        onPress={()=>null} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
  	fontSize: 50
  }
});