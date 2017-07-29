import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class FrontPage extends React.Component {
	static navigationOptions = {
	  title: 'Welcomeqweqweqweqweqqwe',
	};
  render() {
  	const { navigate } = this.props.navigation;
    return (
      // <View style={styles.container}>
      	<Image
        	source={require('./breakout.jpeg')}
        	style={styles.container}>
        <View 
        	style={styles.buttoncontainer}>
	        <Button 
	        	title="New Game"
	        	onPress={() => navigate('StartingStory')} 
	        	style={styles.button}/>

	        <Button 
	        title="Continue"
	        onPress={()=>null} 
	        style={styles.button}/>
	      </View>
        </Image>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  text: {
  	fontSize: 50
  },

  button: {
  },

  buttoncontainer: {
  	alignItems: 'center',
  	justifyContent: 'space-around',
  	height: 100,
  	marginBottom: 150
  }
});