export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
//export const COUNT_DOWN = 'COUNT_DOWN';


export function questionAnswer(index, answer) {
	return { 
		type: QUESTION_ANSWER,
		payload: { index, answer }
	};
}

export function changeQuestion(buttonName) {
	return { 
		type: CHANGE_QUESTION,
		payload: { buttonName }
	};
}

export function submit(questions) {
	return {
		type: SUBMIT,
		payload: { questions }
	};
}

export function initQuestions(questions) {
	return {
		type: INIT_QUESTIONS,
		payload: { questions }
	};
}
/*
export function countDown() {
	return {
		type: COUNT_DOWN
	};
}

export const createCD = (interval) => {
	return (dispatch) => {
      	setInterval( () => {
        dispatch(countDown());
      }, 1000);
	}
}
*/
