/*
TODO: Reset round to round 1 after revealing answer
reset button fill up whole screen at end (has probs)
remove scoring; only show at end of 1st round if everyone right, end of 2nd round (That's correct - w explanation OR That's wrong - w correct answer and explanation)
also figure out scoring/penalties
before restarting, show final scores
instead of new page for game, just make start button disappear?
*/


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const nextPlayerButton = document.getElementById('next-player-btn')
const questionContainerElement = document.getElementById('question-container')
const namesContainerElement = document.getElementById('start')
const questionElement = document.getElementById('question')
const ans1Element = document.getElementById('ans1')
const ans2Element = document.getElementById('ans2')
const ans3Element = document.getElementById('ans3')
const ans4Element = document.getElementById('ans4')
const playersTurnElement = document.getElementById('currName')
const round2Element = document.getElementById('round2')

let shuffledQuestions, correctQuestionIndex;
let score1, score2, score3, score4 = 0;
let currPlayer= 0;
let currRound = 1;
let correctPrevSelected = false;
let currentlySelected = null;
let p1correct, p2correct, p3correct, p4correct = false;


function restartSelection(){
	ans1Element.classList.remove("selected")
	ans1Element.classList.add("notselected")

	ans2Element.classList.remove("selected")
	ans2Element.classList.add("notselected")

	ans3Element.classList.remove("selected")
	ans3Element.classList.add("notselected")

	ans4Element.classList.remove("selected")
	ans4Element.classList.add("notselected")
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
	if ((!p1correct || !p2correct || !p3correct || !p4correct) && currRound==1){
		setNextRound()
		restartSelection()
	}
	else{
		if (currRound==2){
			round2Element.classList.add('hide')
		 	currRound = 1
		}
		playersTurnElement.classList.remove('hide')
		correctQuestionIndex++
		if (correctQuestionIndex > (questions.length-1)){
			startButton.innerText = "Restart"
			startButton.classList.remove('hide')
			startButton.addEventListener('click', restartGame)
			nextButton.classList.add('hide')
		} 
		else {
			setnextQuestion()
			restartSelection()
			currPlayer = 1
		}	

	}
	
})

function restartGame(){
	window.location.reload();
}

function setNextRound(){
	correctPrevSelected = false
	round2Element.classList.remove('hide')
	playersTurnElement.classList.add('hide')
	currRound++
	currPlayer = 1
	p1correct = false
	p2correct = false
	p3correct = false
	p4correct = false
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
	nextPlayerButton.classList.remove('hide')
	shuffledQuestions=questions.sort(() => Math.random() - 0.5)
	correctQuestionIndex=0;
	questionContainerElement.classList.remove('hide') 
	setnextQuestion()

	score1 = 0 
	score2 = 0
	score3 = 0 
	score4 = 0
	currPlayer = 1
	currRound = 1

	playersTurnElement.classList.remove("hide")
	playersTurnElement.innerText = document.getElementById('name1').value + "'s Turn"
	
}

function changePlayer(){
		playersTurnElement.classList.remove("hide")
		correctPrevSelected = false
		if (currPlayer == 3){
			nextButton.classList.remove('hide')
			nextPlayerButton.classList.add('hide')
			currPlayer++;
		}
		else{
			currPlayer++
		}

		if (currPlayer == 2){
			playersTurnElement.innerText = document.getElementById('name2').value + "'s Turn"
		}
		if (currPlayer == 3){
			playersTurnElement.innerText = document.getElementById('name3').value + "'s Turn"
		}
		if (currPlayer == 4){
			playersTurnElement.innerText = document.getElementById('name4').value + "'s Turn"
		}

		restartSelection()

		document.getElementById("ans1").setAttribute('onclick','selectAnswer(ans1, currPlayer)') 
		document.getElementById("ans2").setAttribute('onclick','selectAnswer(ans2, currPlayer)')
		document.getElementById("ans3").setAttribute('onclick','selectAnswer(ans3, currPlayer)')
		document.getElementById("ans4").setAttribute('onclick','selectAnswer(ans4, currPlayer)')
	
}

function setnextQuestion(){
	resetState(); //is this even working
	showQuestion(shuffledQuestions[correctQuestionIndex]);
	nextButton.classList.add('hide')
	nextPlayerButton.classList.remove('hide')
	currRound = 1
}

function showQuestion(question) {
	correctPrevSelected = false
	questionElement.innerText = question.question; 
	ans1Element.innerText = question.answers[0].text;

	if(question.answers[0].correct){
		ans1Element.classList.add('true')
	}
	ans2Element.innerText = question.answers[1].text;
	if(question.answers[1].correct){
		ans2Element.classList.add('true')
	}
	ans3Element.innerText = question.answers[2].text;
	if(question.answers[2].correct){
		ans3Element.classList.add('true')
	}
	ans4Element.innerText = question.answers[3].text;
	if(question.answers[3].correct){
		ans4Element.classList.add('true')
	}
}


function resetState(){
	clearStatusClass(questionElement)
	clearStatusClass(ans1Element)
	clearStatusClass(ans2Element)
	clearStatusClass(ans3Element)
	clearStatusClass(ans4Element)
}

function selectAnswer(e, player){
	if (currentlySelected!=null) {
		currentlySelected.classList.remove("selected")
		currentlySelected.classList.add("notselected")
	}

	console.log("answer selected")
	const correct = e.classList.contains('true');

	e.classList.remove("notselected")
	e.classList.add("selected")
	currentlySelected = e
	
	if (correct && !correctPrevSelected){
		correctPrevSelected = true

		if (currRound == 1){ 
			if (player == 1){
				score1+=10
			}
			if (player == 2){
				score2+=10
			}
			if (player == 3){
				score3+=10
			}
			if (player == 4){
				score4+=10
			}
		}

		else if (currRound == 2){ 
			score1+=5
			score2+=5
			score3+=5
			score4+=5
		}

			if (currPlayer == 1){
				p1correct = true
			}
			if (currPlayer == 2){
				p2correct = true
			}
			if (currPlayer == 3){
				p3correct = true
			}
			if (currPlayer == 4){
				p4correct = true
			}

				
	}
			
	if (!correct && correctPrevSelected){
		correctPrevSelected = false
		if (currRound == 1){
			if (player == 1){
				if (currRound == 1){ 
					score1-=10
				}
				else if (currRound == 2){
					score1-=5
				}
			}
			if (player == 2){
				if (currRound == 1){ 
					score2-=10
				}
				else if (currRound == 2){
					score2-=5
				}
			}
			if (player == 3){
				if (currRound == 1){ 
					score3-=10
				}
				else if (currRound == 2){
					score3-=5
				} 
			}
			if (player == 4){
				if (currRound == 1){ 
					score4-=10
				}
				else if (currRound == 2){
					score4-=5
				}
			}
	}

	else if (currRound == 2){
		score1-=5
		score2-=5
		score3-=5
		score4-=5
	}
	if (currPlayer==1){
		p1correct = false
	}
	if (currPlayer==2){
		p2correct = false
	}
	if (currPlayer==3){
		p3correct = false
	}
	if (currPlayer==4){
		p4correct = false
	}

	}

	document.getElementById('score1').innerText=score1
	document.getElementById('score2').innerText=score2
	document.getElementById('score3').innerText=score3
	document.getElementById('score4').innerText=score4
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

const questions = [ 
	{
		question: "What's the runtime of binary sort?",
		answers: [
			{text: '2O(n)', correct: false},
			{text: 'O(n)', correct: false},
			{text: 'O(log n)', correct: true},
			{text: 'O(n)^2', correct: false}	
		],
	},

	{
		question: "What is the height of this tree?",
		answers: [
			{text: '5', correct: false},
			{text: '3', correct: true},
			{text: '4', correct: false},
			{text: 'None of the above', correct: false}
		],
	},

	{
		question: "Why would you ever want to use a singly linked list over a doubly linked list??",
		answers: [
			{text: 'Doubly linked lists are always better', correct: false},
			{text: 'When you are heavily constrained for memory', correct: true}, //seem like reset state isn't working...
			{text: 'When you only need to access one end of the list', correct: false},
			{text: 'Faster look-up times', correct: false}
		],
	},

]