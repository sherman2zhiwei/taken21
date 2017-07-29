import React from 'react';
import { FlatList,Image,StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';

export default class MissionPage extends React.Component{
	render(){
		return(
				<ScrollView contentContainerStyle={styles.container}>
					<TouchableOpacity 
						onPress={()=>null} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>

					<TouchableOpacity 
						onPress={()=>null} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>null} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>null} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>null} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>

				</ScrollView>
			)
	}
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button: {
  	height:100,
  	width: 100,
  	borderRadius: 50,
  	marginTop: 30,
  	marginBottom:30
  },
  image: {
  	height: 100,
  	width: 100,
  	borderRadius: 50
  },
  item: {
  	fontSize: 100
  }

});