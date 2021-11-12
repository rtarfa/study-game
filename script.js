
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, correctQuestionIndex;
let quizScore = 0;

//instead of new page for game, just make start button disappear?

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
	correctQuestionIndex++
	console.log(correctQuestionIndex)
	if (correctQuestionIndex > (questions.length-1)){
		// correctQuestionIndex = 0;
		startButton.innerText = "Restart"
		startButton.classList.remove('hide')
		nextButton.classList.add('hide')
	} // show reset button/reset game
	else {
		setnextQuestion()
	}		
})

function startGame(){
	startButton.classList.add('hide')
	nextButton.classList.remove('hide')
	shuffledQuestions=questions.sort(() => Math.random() - 0.5)
	correctQuestionIndex=0;
	questionContainerElement.classList.remove('hide') 
	setnextQuestion()
	quizScore=0
}

function setnextQuestion(){
	resetState();
	showQuestion(shuffledQuestions[correctQuestionIndex]);
	//if run out of questions..reset??
}

function showQuestion(question) {
	questionElement.innerText = question.question; 
	question.answers.forEach((answer) =>{
		//loop through answers 
    	
		const button = document.createElement("button")
		button.innerText=answer.text;
		button.classList.add('btn')
		if(answer.correct){
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function resetState(){
	clearStatusClass(document.body)
	// nextButton.classList.add('hide')
	while(answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e){
	const selectedButton= e.target
	const correct = selectedButton.dataset.correct

	setStatusClass(document.body,correct)
	Array.from(answerButtonsElement.children).forEach((button)=>{
		setStatusClass(button, button.dataset.correct)
	})
	if(shuffledQuestions.length > correctQuestionIndex+1){
		//nextButton.classList.remove("hide")
		nextButton.innerText="restart"
		nextButton.classList.remove("hide") //needed?
	}
	else{
		startButton.innerText = "Restart"
		startButton.classList.remove("hide")
	}
	if(selectedButton.dataset = correct) {
		quizScore++
	}
	document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element,correct){
	clearStatusClass(element)
	if(correct){
		element.classList.add("correct")
	} else{
		element.classList.add("wrong")
	}
}

function clearStatusClass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [ //pull from practice test
	{
		question: "which one is this?",
		answers: [
			{text: 'hellooo', correct: false},
			{text: 'hellooo', correct: false},
			{text: 'yesss', correct: true},
			{text: 'hellooo', correct: false}	
		],
	},

	{
		question: "who is the best hxh char?",
		answers: [
			{text: 'gon', correct: false},
			{text: 'killua', correct: true},
			{text: 'illumi', correct: true},
			{text: 'hisoka', correct: false}
		],
	},

	{
		question: "who is the prime minister of here?",
		answers: [
			{text: 'there', correct: true},
			{text: 'nope', correct: false},
			{text: 'uhm', correct: false},
			{text: 'ayyyno', correct: false}
		],
	},

]