import React from 'react';
import { Provider } from 'react-redux';
import GlobalState from '../reducers/reducers';
import { createStore } from 'redux';

import { questions } from '../assets/mock-data';

import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import GameScreen from './GameScreen';
import MyButton from './MyButton';
import IndexScreen from './IndexScreen';
import InstructionScreen from './InstructionScreen';

const AppNavigator = createBottomTabNavigator({
	IndexScreen: { screen: IndexScreen, navigationOptions:{tabBarLabel: 'Inicio', tabBarIcon: ({tintColor}) => (
		<Icon name="ios-home" size={24}/>)} },
	InstructionScreen: { screen: InstructionScreen, navigationOptions:{tabBarLabel: 'Instrucciones', tabBarIcon: ({tintColor}) => (
		<Icon name="ios-settings" size={24}/>)}  },
	GameScreen: { screen: GameScreen, navigationOptions:{tabBarLabel: 'Jugar', tabBarIcon: ({tintColor}) => (
		<Icon name="ios-play" size={24}/>)}  }
	},{
	initialRouteName: "IndexScreen",
	headerMode: 'none'
})
const AppContainer = createAppContainer(AppNavigator);


export default class ReduxProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = { 
			score: 0,
			finished: false,
			currentQuestion: 0, 
			questions: [ ...questions ]
			/*countDown: {
				min: 0,
				sec: 50,
				running: false
			}*/
		};
		this.store = this.configureStore(); 
	}

	render() {

		return (
			<Provider store = {this.store}>
				<AppContainer/>
			</Provider>
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState); //applyMiddleware(thunk)
	}
}