
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const namesContainerElement = document.getElementById('start')
const questionElement = document.getElementById('question')
const ans1Element = document.getElementById('ans1')
const ans2Element = document.getElementById('ans2')
const ans3Element = document.getElementById('ans3')
const ans4Element = document.getElementById('ans4')
//const answerButtonsElement = document.getElementById('answer-buttons') 

let shuffledQuestions, correctQuestionIndex;
let quizScore = 0;
let correctPrevSelected = false;

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

function updateNames(){
	const Name1 = document.getElementById('nameD1')
	const Name2 = document.getElementById('nameD2')
	const Name3 = document.getElementById('nameD3')
	const Name4 = document.getElementById('nameD4')

	Name1.innerText = document.getElementById('name1').value
	Name2.innerText = document.getElementById('name2').value
	Name3.innerText = document.getElementById('name3').value
	Name4.innerText = document.getElementById('name4').value
}

function startGame(){
	updateNames()
	namesContainerElement.classList.add('hide')
	startButton.classList.add('hide')
	nextButton.classList.remove('hide')
	shuffledQuestions=questions.sort(() => Math.random() - 0.5)
	correctQuestionIndex=0;
	questionContainerElement.classList.remove('hide') 
	setnextQuestion()
	quizScore=0
}

function setnextQuestion(){
	resetState(); //is this even working
	showQuestion(shuffledQuestions[correctQuestionIndex]);
	//if run out of questions..reset??
}

function showQuestion(question) {
	correctPrevSelected = false
	questionElement.innerText = question.question; 
	ans1Element.innerText = question.answers[0].text;

	if(question.answers[0].correct){
		//ans1Element.dataset.correct = question.answers[0].correct
		ans1Element.classList.add('true')
	}
		//answerButtonsElement.appendChild(button)
	ans2Element.innerText = question.answers[1].text;
	if(question.answers[1].correct){
		//ans2Element.dataset.correct = question.answers[1].correct
		ans2Element.classList.add('true')
	}
	ans3Element.innerText = question.answers[2].text;
	if(question.answers[2].correct){
		//ans3Element.dataset.correct = question.answers[2].correct
		ans3Element.classList.add('true')
	}
	ans4Element.innerText = question.answers[3].text;
	if(question.answers[3].correct){
		//ans4Element.dataset.correct = question.answers[3].correct
		ans4Element.classList.add('true')
	}

	// button.addEventListener('click', selectAnswer)
	
	// question.answers.forEach((answer) =>{
	// 	//loop through answers 
	// 	// answerButtonsElement
    	
	// 	// const button = document.createElement("button")
	// 	// button.innerText=answer.text;
	// 	// button.classList.add('btn')

	// 	if(answer.correct){
	// 		button.dataset.correct = answer.correct
	// 	}
	// 	button.addEventListener('click', selectAnswer)
	// 	answerButtonsElement.appendChild(button)
	// })
}


function resetState(){
	//clearStatusClass(document.body)
	clearStatusClass(questionElement)
	clearStatusClass(ans1Element)
	clearStatusClass(ans2Element)
	clearStatusClass(ans3Element)
	clearStatusClass(ans4Element)
	// nextButton.classList.add('hide')
	// while(answerButtonsElement.firstChild) {
	// 	answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	// }
}

function selectAnswer(e){
	
	console.log("answer selected")
	//const selectedButton= e.target
	const correct = e.classList.contains('true');

	// if (correct && correctPrevSelected){
	// 	quizScore--
	// }

	e.classList.add("selected")

	//setStatusClass(document.body,correct) //need this for css
	// Array.from(answerButtonsElement.children).forEach((button)=>{
	// 	setStatusClass(button, button.dataset.correct)
	// })
	// if(shuffledQuestions.length > correctQuestionIndex+1){
	// 	//nextButton.classList.remove("hide")
	// 	nextButton.innerText="restart"
	// 	nextButton.classList.remove("hide") //needed?
	// }
	// else{
	// 	startButton.innerText = "Restart"
	// 	startButton.classList.remove("hide")
	// }
	//if(selectedButton.dataset = correct) {
	if (correct && !correctPrevSelected){
		correctPrevSelected = true
		quizScore++ //problem is when chose a diff answer, quizscore goes up //quizScore = score from previous round + 1
	}
	if (!correct && correctPrevSelected){
		quizScore--
		correctPrevSelected = false
	}
	document.getElementById('scoreboard').innerText=quizScore
	//delete this after (show quiz score after that round)
}

function setStatusClass(element,correct){ //don't really need this function
	clearStatusClass(element)
	if(correct){
		element.classList.add("true")
	} else{
		element.classList.add("false")
	}
}

function clearStatusClass(element){
	element.classList.remove('true')
	element.classList.remove('false')
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
			{text: 'illumi', correct: false},
			{text: 'hisoka', correct: false}
		],
	},

	{
		question: "who is the prime minister of here?",
		answers: [
			{text: 'there', correct: true},
			{text: 'nope', correct: false}, //seem like reset state isn't working...
			{text: 'uhm', correct: false},
			{text: 'ayyyno', correct: false}
		],
	},

]