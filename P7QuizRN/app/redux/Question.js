import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Question extends React.Component {
	render() {
		return(
			<View>
				<Text style={styles.numQuestion}>Question {this.props.currentQuestion + 1}</Text>
				<Text style={styles.question}>{this.props.question.question}</Text>
			</View>	
		);
	}
}
const styles = StyleSheet.create({
	numQuestion: {
		fontWeight: 'bold',
		color: 'blue',
		//fontFamily: 'cursive',
		fontSize: 25,
		textAlign: 'center'
	},
	question: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 25,
		marginTop: 10,
		marginBottom: 10
	}
});
