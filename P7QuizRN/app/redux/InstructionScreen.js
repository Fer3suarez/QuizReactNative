import React from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyButton from './MyButton.js';


export default class InstructionScreen extends React.Component {

render() {
	return (
		<View style={{ flex:1, alignItems:'center', justifyContent:'center', margin: 4}}>
			<Text style={styles.header}>QUIZ game</Text>
			<Text style={styles.rules}>Bienvenido a QUIZ game 10 preguntas para ponerte a prueba. Dispones de 1 minuto y 15 segundos para responder una serie de preguntas que se irán mostrando de una en una. ¿Podrás conseguirlo? ADELANTE</Text>
			<MyButton onPress={() => this.props.navigation.goBack()} text={"Go back"}/>
		</View>
	)}
}

const styles = StyleSheet.create({
	header: {
		textAlign: 'center',
		fontSize: 28, 
		backgroundColor: 'blue',
		color: 'white',
		padding: 5,
		borderRadius: 7,
		width: '100%',
		marginBottom: 21
		},
	rules: {
		fontSize: 15,
		color: 'black',
		marginBottom: 400,
		padding: 10
	}
})
