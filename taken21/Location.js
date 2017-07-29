import React from 'react';
import { FlatList,Image,StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import ImagePreview from 'react-native-image-preview';

export default class Location extends React.Component{
	render(){
		return(
		<ScrollView contentContainerStyle={styles.container}>
			<ImagePreview visible={true} source={{uri: './location.jpg'}} close={null} />
		</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})