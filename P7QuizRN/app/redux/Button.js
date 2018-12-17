import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';


export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
    	this.props.onClick(this.props.buttonName);
}

    render(){
    	return (
    		<TouchableHighlight onPress={this.onClick} style={styles.button} disabled={this.props.disabled}>
                <Text style={styles.buttonText}>{this.props.buttonName}</Text>
            </TouchableHighlight>
    		);
    }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        flexWrap: 'nowrap',
        color: 'white',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: 'blue',
        borderRadius: 7,
        borderStyle: 'solid',
        padding: 5,
        height: 30,
        //width: 210,
        margin: 1,
        marginLeft: 5,
        marginRight: 5
    }
})
/*
#button:disabled {
  background-color: grey;
  cursor: not-allowed;
}
*/