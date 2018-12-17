import React from 'react';

import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MyButton from './MyButton.js';


export default class IndexScreen extends React.Component {

render() {
	return (
		<View style={{ flex:1, margin: 4, justifyContent:'center', backgroundColor: 'white', backgrounSize: 'cover', borderRadius: 30, marginTop: 35, marginBottom: 20}}>
			<Text style={styles.initialText}>QUIZ game</Text>
			<Image style={styles.image} source={require('../assets/launch.jpg')}/>
			<View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
				<MyButton onPress={() => this.props.navigation.navigate('GameScreen')} text={"Play"}/>
				<MyButton onPress={() => this.props.navigation.navigate('InstructionScreen')} text={"Rules"}/>
			</View>
		</View>
	)}
}

const styles = StyleSheet.create({
	initialText: {
		flex: .6,
		textAlign: 'center',
		fontSize: 28,
		backgroundColor: 'blue',
		color: 'white',
		padding: 5,
		borderRadius: 7
		},
	image: {
		flex: 8,
		marginTop: 5,
		marginBottom: 5,
		marginRight: 5,
		marginLeft: 5,
		width: '100%', 
		height: '100%'
	}
})
