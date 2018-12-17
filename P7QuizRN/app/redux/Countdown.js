import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: {},
			min: 1,
			sec: 15
		};
		this.timer = 0;
		this.start = this.start.bind(this);
		this.countDown = this.countDown.bind(this);
	}
	secToFinish(secs) {
		let obj = {
			'm': this.state.min,
			's': this.state.sec
		};
		return obj;
	}


	componentDidMount() {
		/*const {startCount} = this.props
		this.setState({
			count: startCount
		})
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count - 1
			}))
		}, 1000)
		*/
		let timeLeft = this.secToFinish(this.state.sec);
		this.setState({ time: timeLeft});
	}


	start() {
		if (this.timer === 0 && this.state.sec > 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		let min = this.state.min;
		let sec = this.state.sec - 1;
		
		if (sec < 0) {
			if (min !== 0) {
				min = min - 1;
				sec = 59;
			} else {
				this.props.final(true);
				clearInterval(this.timer);
			}
		}
		this.setState ({
			time: this.secToFinish(sec),
			min: min,
			sec: sec
		});
	}


	render() {
		this.start();
		//const {count} = this.state
		return(
			<View>
				<Text style={styles.countDown}>0{this.state.time.m}m : {this.state.time.s}s</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	countDown: {
		fontSize: 20,
		justifyContent: "center",
  		flexWrap: 'nowrap',
  		textAlign: 'center',
  		fontWeight: 'bold',
  		color: 'red'
	}
})