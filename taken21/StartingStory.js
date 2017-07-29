import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class StartingStory extends React.Component{
	render(){
		const { navigate } = this.props.navigation;

		return(
		<View style={styles.container}>
			<Text>Based on a true story, fuk u</Text>
			<Button
				title="Continue"
				onPress={()=> navigate('MissionPage')}/>
		</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
