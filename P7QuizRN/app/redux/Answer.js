import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Answer extends React.Component {
	constructor(props) {
		super(props);
		this.answerOnAnswer = this.answerOnAnswer.bind(this);
	}
	answerOnAnswer(TextInput){
		this.props.contentOnAnswer(TextInput);
	}
	render() {
		return(
			<View style={styles.answer}>
				<TextInput style={styles.inputAnswer} 
						    placeholder="Type your answer here"
							type="text" 
							value = {this.props.question.userAnswer || ""} onChangeText = {this.answerOnAnswer}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputAnswer: {
		borderRadius: 3,
		justifyContent: "center",
    	alignItems: "stretch",
    	borderRightWidth: 2,
    	borderLeftWidth: 2,
    	borderTopWidth: 2,
    	borderBottomWidth: 2, 
    	borderColor: "blue",
    	fontFamily: 'sans-serif',
		//cursor: 'pointer',
		height: 40,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10
	},
	answer: {
		textAlign: 'center'
	}
})