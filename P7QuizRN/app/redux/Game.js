import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Content from './Content';
import Actionbar from './Actionbar';

export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.gameOnAnswer = this.gameOnAnswer.bind(this);
		this.onClick = this.onClick.bind(this);
		this.final = this.final.bind(this);
	//	this.start = this.start.bind(this);
	}
	gameOnAnswer(TextInput) {
		this.props.appOnAnswer(TextInput);
	}
	onClick(buttonName) {
		this.props.onClick(buttonName);
	}
	final(finalTime) {
		this.props.final(finalTime);
	}
	
	//start(sec) {
	//	this.start(sec);
	//}
	render() {
		return(
      	<View style={styles.game}>
			<Content gameQuestion = {this.props.question}
			 		 gameOnAnswer = {this.gameOnAnswer}
			  		 score = {this.props.score}
			   		 finished = {this.props.finished}
			    	 currentQuestion = {this.props.currentQuestion}
			    	 final = {this.final}/>
			<Actionbar onClick = {this.onClick}
					   currentQuestion = {this.props.currentQuestion}
					   finished = {this.props.finished}
					   score = {this.props.score}/>
		</View>
		);
	}
}
const styles = StyleSheet.create({
	game: {
		flex: 10,
		marginRight: 8
	}
})