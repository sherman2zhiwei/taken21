import React from 'react';
import { FlatList,Image,StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';

export default class MissionPage extends React.Component{
	render(){
		const { navigate } = this.props.navigation;

		return(
				<ScrollView contentContainerStyle={styles.container}>
					<TouchableOpacity 
						onPress={()=>navigate("Location")} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>

					<View style={styles.progresscircle}/>
					<View style={styles.progresscircle}/>

					<TouchableOpacity 
						onPress={()=>navigate("Location")} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>

					<View style={styles.progresscircle}/>
					<View style={styles.progresscircle}/>

					<TouchableOpacity 
						onPress={()=>navigate("Location")} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>

					<View style={styles.progresscircle}/>
					<View style={styles.progresscircle}/>

					<TouchableOpacity 
						onPress={()=>navigate("Location")} 
						style={styles.button}>
						<Image
							style = {styles.image}
							source={require('./location.jpg')}
						/>
					</TouchableOpacity>

					<View style={styles.progresscircle}/>
					<View style={styles.progresscircle}/>

					<TouchableOpacity 
						onPress={()=>navigate("Location")} 
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
  },
  progresscircle: {
  	width: 10,
  	height: 10,
  	borderRadius: 5,
  	backgroundColor: 'orange',
  	marginTop: 10,
  	marginBottom: 10
  }

});