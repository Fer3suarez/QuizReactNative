import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Tips extends React.Component {
	
	
	render() {
		return(
			<View>
				<Text style={styles.titleTips}>Tips </Text>
				<ScrollView>
					{this.props.tips.map((tip, index) => {
						return (
							<Text style={styles.tip}>
								{tip}
							</Text>
						)}
					)}
				</ScrollView>
			</View>
		);

	}
}

const styles = StyleSheet.create({
	titleTips: {
		textDecorationLine: 'underline',
		fontWeight: 'bold',
		marginTop: 7,
		marginBottom: 1,
		fontFamily: 'sans-serif',
		fontSize: 20,
		textAlign: 'center'
	},
	tip: {
		marginTop: 5,
  		marginBottom: 5,
  		fontSize: 14,
  		textAlign: 'center',

	}
})
