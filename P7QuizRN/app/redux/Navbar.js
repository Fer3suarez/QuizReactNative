import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class NavBar extends React.Component {
	render() {
		return(
			<Text style={styles.navbar}>
				QUIZ game
			</Text>
		);
	}
}
const styles = StyleSheet.create({
	navbar: {
		flex: .6,
		textAlign: 'center',
		fontSize: 28,
		backgroundColor: 'blue',
		color: 'white',
		padding: 5,
		borderRadius: 7

		//fontFamily: 'cursive',
	}
})