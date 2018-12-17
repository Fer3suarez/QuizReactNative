import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';
import Countdown from './Countdown';



export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.contentOnAnswer = this.contentOnAnswer.bind(this);
		this.final = this.final.bind(this);
	//	this.start = this.start.bind(this);
	}
	contentOnAnswer(TextInput) {
		this.props.gameOnAnswer(TextInput);
	}
	final(finalTime) {
		this.props.final(finalTime);
	}
	//start(sec) {
	//	this.props.start(sec);
	//}
	render() {
		if (this.props.finished === true) {
			return(
				<View style={styles.gameOver}>
					<Text style={styles.msgGO}>GAME OVER</Text>
					<Text style={styles.msgGO}>
						HAS CONSEGUIDO {this.props.score} PUNTOS.
					</Text>
				</View>
				)
		}
		return(
			<View style={styles.contentAll}>
				<Image style={styles.imagen} source={{uri: this.props.gameQuestion.attachment.url}}/>
				<View style={styles.content}>
					<Countdown final = {this.final}/>
					<Question question = {this.props.gameQuestion} currentQuestion = {this.props.currentQuestion}/>
					<Answer contentOnAnswer = {this.contentOnAnswer}
							question = {this.props.gameQuestion}/>
					<Tips tips = {this.props.gameQuestion.tips}/>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	gameOver: {
		flex: 4,
		fontWeight: 'bold',
		marginTop: 20,
		fontSize: 40,
		marginBottom: 2,
		marginLeft: 2,
		marginRight: 2,
		justifyContent: 'center',
		textAlign: 'center',
		padding: 5
	},
	msgGO: {
		flex: 14,
		fontWeight: 'bold',
		marginTop: 2,
		fontSize: 40,
		color: 'red',
		marginBottom: 20,
		marginLeft: 2,
		marginRight: 2,
		justifyContent: 'center',
		textAlign: 'center',
		padding: 5
	},
	contentAll: {
		flex: 5,
		borderStyle: 'solid',
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 10,
		marginRight: 2,
		marginTop: 2,
		marginLeft: 2,
		flexDirection: 'column'
	},
	imagen: {
		flex: 4,
		marginTop: 5,
		marginBottom: 5,
		marginRight: 5,
		marginLeft: 5,
		width: '100%',
		height: '100%',
		resizeMode: 'stretch'
	},
	content: {
		flex: 5,
		padding: 1,
		marginTop: 2,
		marginBottom: 3,
		marginLeft: 5,
  		flexDirection: 'column'

	}
})



