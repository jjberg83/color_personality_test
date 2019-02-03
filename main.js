function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "A friend invites you to a party. You...",
		answers: {
			a: 'do a red thing',
			b: 'do a blue thing',
			c: 'do a yellow thing',
      d: 'do a green thing'
		},
		correctAnswer: 'b'
	}
];
