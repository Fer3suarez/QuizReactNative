import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Game from './Game.js';
import Navbar from './Navbar.js';
import MyButton from './MyButton.js';

import { connect } from 'react-redux';
import {questionAnswer, changeQuestion, submit, initQuestions} from '../reducers/actions';


const URL = 'https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=c4df4b1db46e9d2e419b';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.appOnAnswer = this.appOnAnswer.bind(this);
    this.onClick = this.onClick.bind(this);
    this.download = this.download.bind(this);
    //this.createCD = this.createCD.bind(this);
    this.final = this.final.bind(this);
  }
  componentDidMount() {
      this.download();
  }
  /*componentDidUpdate() {
      if (this.props.countDown.min === 0 && this.props.countDown.sec === 0) {  //import applyMiddleware
        this.onClick("Submit");
      }
  }*/
  download() {
    fetch(URL)
      .then(res => res.json())
        .then((questions) => {
        this.props.dispatch(initQuestions(questions));
      })
      .catch(err => console.error(err));
  }
  
  /*createCD(interval) {
    return (dispatch) => {
      setInterval( () => {
        this.props.dispatch(countDown());
      }, 1000);
    }
  }*/
  appOnAnswer(answer) {
    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
    /*if (!this.props.countDown.running){
      this.props.dispatch(createCD());    
    }*/
  }
  onClick(buttonName){
    if (buttonName === "Submit"){
       this.props.dispatch(submit(this.props.questions));
    }
    if (buttonName === "Play Again"){
       this.download();
    }
    if (buttonName === "Next") {
      this.props.dispatch(changeQuestion(buttonName));
    } else if (buttonName === "Previous") {
      this.props.dispatch(changeQuestion(buttonName));
    }
  }  
  final(finalTime) {
    if (finalTime === true) {
      this.props.dispatch(submit(this.props.questions));
    }
  }
  

  render() {
    return ( 
      <View style={{flex:1, margin: 4, justifyContent:'center', backgroundColor: 'white', backgrounSize: 'cover', borderRadius: 30, marginTop: 35, marginBottom: 20}}>
          <Navbar/>
          <Game question = {this.props.questions[this.props.currentQuestion]}
                appOnAnswer = {this.appOnAnswer}
                onClick = {this.onClick}
                currentQuestion = {this.props.currentQuestion}
                score = {this.props.score}
                finished = {this.props.finished}
                final = {this.final}/>
          <MyButton onPress={() => this.props.navigation.goBack()} text={"Go back"}/>
      </View>
      
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(GameScreen);