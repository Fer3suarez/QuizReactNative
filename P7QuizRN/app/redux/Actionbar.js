import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';


export default class Actionbar extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(buttonName) {
    	this.props.onClick(buttonName);
    }
  
	render() {

		return(
				<View style={styles.actionbar}>
					<Button style={styles.button} buttonName = "Submit" onClick = {this.onClick} disabled = {this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Previous" onClick = {this.onClick} disabled = {this.props.currentQuestion === 0 || this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Next" onClick = {this.onClick} disabled = {this.props.currentQuestion === 9 || this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Play Again" onClick = {this.onClick}/>
		      	</View>
		      	
		);
	}
}
const styles = StyleSheet.create({
	actionbar: {
		flex: .5,
		height: 'auto',
		textAlign: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 25,
		marginTop: 25
	}
})