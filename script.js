
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
let score1= 0
let score2= 0
let score3= 0 
let score4 = 0;
let correctPrevSelected = false;
let currentlySelected = null;

//instead of new page for game, just make start button disappear?

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
	correctQuestionIndex++
	console.log(correctQuestionIndex)
	if (correctQuestionIndex > (questions.length-1)){
		// correctQuestionIndex = 0;
		startButton.innerText = "Restart"
		startButton.classList.remove('hide')
		startButton.addEventListener('click', restartGame)
		nextButton.classList.add('hide')
	} // show reset button/reset game
	else {
		setnextQuestion()
		ans1Element.classList.remove("selected")
		ans1Element.classList.add("notselected")

		ans2Element.classList.remove("selected")
		ans2Element.classList.add("notselected")

		ans3Element.classList.remove("selected")
		ans3Element.classList.add("notselected")

		ans4Element.classList.remove("selected")
		ans4Element.classList.add("notselected")
	}		
})

function restartGame(){
	window.location.reload();
}

function updateNames(){
	const Name1 = document.getElementById('nameD1')
	const Name2 = document.getElementById('nameD2')
	const Name3 = document.getElementById('nameD3')
	const Name4 = document.getElementById('nameD4')

	Name1.innerText = document.getElementById('name1').value + ": "
	Name2.innerText = document.getElementById('name2').value + ": "
	Name3.innerText = document.getElementById('name3').value + ": "
	Name4.innerText = document.getElementById('name4').value + ": "
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
	score1 = 0 
	score2 = 0
	score3 = 0 
	score4 = 0

	// document.getElementById("a").onclick =
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
	//reset scores??
	// nextButton.classList.add('hide')
	// while(answerButtonsElement.firstChild) {
	// 	answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	// }
}

function selectAnswer(e, player){
	
	if (currentlySelected!=null) {
		currentlySelected.classList.remove("selected")
		currentlySelected.classList.add("notselected")
	}

	console.log("answer selected")
	//const selectedButton= e.target
	const correct = e.classList.contains('true');

	// if (correct && correctPrevSelected){
	// 	quizScore--
	// }

	e.classList.remove("notselected")
	e.classList.add("selected")
	currentlySelected = e

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
		if (player == 1){
			console.log(score1)
			score1++ 
			document.getElementById('score1').innerText=score1
			console.log("here")
			console.log(score1)
		}
		if (player == 2){
			score2++ 
			document.getElementById('score2').innerText=score2
		}
		if (player == 3){
			score3++ 
			document.getElementById('score3').innerText=score3
		}
		if (player == 4){
			score4++ 
			document.getElementById('score4').innerText=score4
		}
		
		
	}
	if (!correct && correctPrevSelected){
		if (player == 1){
			score1--
			document.getElementById('score1').innerText=score1
		}
		if (player == 2){
			score2-- 
			document.getElementById('score2').innerText=score2
		}
		if (player == 3){
			score3-- 
			document.getElementById('score3').innerText=score3
		}
		if (player == 4){
			score4-- 
			document.getElementById('score4').innerText=score4
		}
		correctPrevSelected = false
	}
	
	
	
	
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