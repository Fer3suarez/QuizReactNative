import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS} from './actions';

function score(state = 0, action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return 0;
		case SUBMIT:
			var newScore = state;
			action.payload.questions.map((question) => {
				if (question.userAnswer) {
					if (question.answer.trim().toLowerCase() === question.userAnswer.trim().toLowerCase()) {
					newScore++;
					}
				} 
			})
			return newScore;
		default:
			return state;
	}
} 

function finished(state = false, action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return false;
		case SUBMIT:
			return true;
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return 0;
		case CHANGE_QUESTION:
			var newState;
			action.payload.buttonName === "Next" ? newState = state + 1:newState = state - 1;
			return newState
		default: 
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return action.payload.questions;
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return { ...question,
							userAnswer: action.payload.index === i ? action.payload.answer:question.userAnswer}
			})
		default:
			return state;
	}
}/*
function countDown(state = {}, action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER: 
			return {min: state.min, sec: state.sec, running: true};
		case INIT_QUESTIONS:
			return {min: 0, sec: 50, running: false};
		case COUNT_DOWN:
			var newState = tick(state);
			return newState;
		default:
			return state;

	}
}*/

function tick(state) {

	var newState;

	if(state.sec === 0 && state.min === 0) {

		newState = {min: 0, sec: 0, running: false};

	} else  if (state.sec === 0){

		 newState = {min: state.min -1 , sec: 59, running: true};

	} else {
		 newState = {min: state.min, sec: state.sec - 1, running: true};
	}

	return newState;
}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions
}));

export default GlobalState;