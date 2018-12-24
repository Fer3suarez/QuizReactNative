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
			<View style={styles.actionbarT}>
				<View style={styles.actionbar}>
					<Button style={styles.button} buttonName = "Submit" onClick = {this.onClick} disabled = {this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Previous" onClick = {this.onClick} disabled = {this.props.currentQuestion === 0 || this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Next" onClick = {this.onClick} disabled = {this.props.currentQuestion === 9 || this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Play Again" onClick = {this.onClick}/>
		      	</View>
		      	<View style={styles.actionbar}>
		      		<Button style={styles.button} buttonName = "Save" onClick = {this.onClick} disabled = {this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Load" onClick = {this.onClick} disabled = {this.props.finished}/>
		      		<Button style={styles.button} buttonName = "Remove" onClick = {this.onClick}/>
		      	</View>
		    </View>
		);
	}
}
const styles = StyleSheet.create({
	actionbar: {
		height: 'auto',
		textAlign: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 25,
		marginTop: 15
	},
	actionbarT: {
		flex: .6,
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center'
	}
})