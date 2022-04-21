// import questions from "questions/advsorts.js";

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const nextPlayerButton = document.getElementById('next-player-btn')
const feedbackButton = document.getElementById('feedback-btn')

const numquestionElement = document.getElementById('numquestion')
const questionContainerElement = document.getElementById('question-container')
const namesContainerElement = document.getElementById('start')
const scoreDisplay = document.getElementById('namesDisplay')
const questionElement = document.getElementById('question')
const imgElement = document.getElementById('image')
const feedbackImgElement = document.getElementById('feedbackimg')
const ans1Element = document.getElementById('ans1')
const ans2Element = document.getElementById('ans2')
const ans3Element = document.getElementById('ans3')
const ans4Element = document.getElementById('ans4')
const playersTurnElement = document.getElementById('currName')
const round2Element = document.getElementById('round2')
const round2Feedback = document.getElementById('round2feedback')
const gameEndElement = document.getElementById('gameEnd')

let shuffledQuestions, correctQuestionIndex;
let score1, score2, score3, score4 = 0;
let currPlayer = 0;
let currRound = 1;
let correctPrevSelected = false;
let currentlySelected = null;
let p1correct, p2correct, p3correct, p4correct = false;
let questionNum = 0;


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
	if ((!p1correct || !p2correct || !p3correct || !p4correct) && currRound == 1){
		setNextRound()
		restartSelection()
	}
	else{
		if (currRound == 2){
			// round2Element.classList.add('d-none')
			removeFeedback()
		 	currRound = 1
		}
		playersTurnElement.classList.remove('d-none')
		correctQuestionIndex++
		// console.log(correctQuestionIndex)
		if (correctQuestionIndex > (questions.length-1)){
			questionContainerElement.classList.add("d-none")
			namesDisplay.classList.remove('d-none')
			gameEndElement.classList.remove("d-none")
			startButton.innerText = "Restart"
			startButton.classList.remove('d-none')
			startButton.addEventListener('click', restartGame)
			nextButton.classList.add('d-none')
		} 
		else {
			setnextQuestion()
			restartSelection()
			currPlayer = 1 
			playersTurnElement.innerText = document.getElementById('name1').value + "'s Turn"
		}	
	}
})

function restartGame(){
	window.location.reload();
}

function setNextRound(){
	correctPrevSelected = false
	round2Element.classList.remove('d-none')
	round2Feedback.classList.add('d-none')
	feedbackImgElement.classList.add('d-none')
	playersTurnElement.classList.add('d-none')
	feedbackButton.classList.remove('d-none')
	nextButton.classList.add('d-none')
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
	namesContainerElement.classList.add('d-none')
	startButton.classList.add('d-none')
	nextPlayerButton.classList.remove('d-none')
	shuffledQuestions=questions.sort(() => Math.random() - 0.5)
	correctQuestionIndex=0;
	questionContainerElement.classList.remove('d-none') 
	setnextQuestion()

	score1 = 0 
	score2 = 0
	score3 = 0 
	score4 = 0
	currPlayer = 1
	currRound = 1

	playersTurnElement.classList.remove("d-none")
	playersTurnElement.innerText = document.getElementById('name1').value + "'s Turn"
	
}

function showFeedback(){
	namesDisplay.classList.remove('d-none')
	questionContainerElement.classList.add('d-none')
	round2Element.classList.add('d-none')

 	if (p1correct){
 		round2Feedback.innerText = "That was correct!"
 	}
 	else{
 		//if image not null, display image
 		if (questions[correctQuestionIndex].image != null){
 			feedbackImgElement.src = questions[correctQuestionIndex].image;
 		}
 		round2Feedback.innerText = `That was incorrect. The correct answer is ${questions[correctQuestionIndex].correctAnswer} because ${questions[correctQuestionIndex].explanation}`
 	}

 	round2Feedback.classList.remove("d-none")
 	feedbackImgElement.classList.remove('d-none')
 	nextButton.classList.remove('d-none')
 	feedbackButton.classList.add('d-none')
}

function removeFeedback (){
	namesDisplay.classList.add('d-none')
	questionContainerElement.classList.remove('d-none')
	round2Feedback.classList.add('d-none')
	feedbackImgElement.classList.add('d-none')
}


function changePlayer(){
		playersTurnElement.classList.remove("d-none")
		correctPrevSelected = false
		if (currPlayer == 3){
			nextButton.classList.remove('d-none')
			nextPlayerButton.classList.add('d-none')
			currPlayer++;
		}
		else{
			currPlayer++
		}

		if (currPlayer == 1){
			playersTurnElement.innerText = document.getElementById('name1').value + "'s Turn"
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
	showQuestion(shuffledQuestions[correctQuestionIndex])
	nextButton.classList.add('d-none')
	nextPlayerButton.classList.remove('d-none')
	p1correct = false
	p2correct = false
	p3correct = false
	p4correct = false
	currRound = 1
}

function showQuestion(question) {
	questionNum += 1
	correctPrevSelected = false
	questionElement.innerText = question.question;
	numquestionElement.innerText = questionNum + " / " + questions.length
	feedbackImgElement.classList.add('d-none')
	imgElement.classList.add('d-none')
	imgElement.src = "";
	feedbackImgElement.src = "";

	if (question.image != null){
		imgElement.src = question.image; 
		imgElement.classList.remove('d-none')
	}
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
			
	if (!correct && correctPrevSelected){ //lets's not do negative points for round 1 //bugfix
		correctPrevSelected = false
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
		question: "True or false: Hash tables are usually fast and don’t waste any memory space as well",
		image: null,
		answers: [
			{text: 'True', correct: false},
			{text: 'False', correct: true},
			{text: '', correct: false},
			{text: '', correct: false}
		],
		correctAnswer: '\"False\"',
		explanation: "While hash tables typically involve a fast look-up, they do take up memory (an array) which is not all used."
	}, 

	{
		question: "True or false: Hash functions need to be fast for the hash table to work correctly",
		image: null,
		answers: [
			{text: 'True', correct: false},
			{text: 'False', correct: true},
			{text: '', correct: false},
			{text: '', correct: false}
		],
		correctAnswer: '\"False\"',
		explanation: "Needs to be fast for it to be fast, but collisions can slow it down while still working correctly."
	}, 

	{
		question: "What are the best case and worst case runtimes for the insert() operation in a hashtable with separate chaining? You may assume that the hash table allows for duplicate values to be inserted. All answers should be tight bounds.",
		image: null,
		answers: [
			{text: 'Best: O(n); Worst: O(n^2)', correct: false},
			{text: 'Best: O(1); Worst: O(n)', correct: false},
			{text: 'Best: O(n); Worst: O(n)', correct: false},
			{text: 'Best: O(1); Worst: O(1)', correct: true}
		],
		correctAnswer: '\"Best: O(1); Worst: O(1)\"',
		explanation: "You may assume the hashtable allows for duplicate values; becuase of this, you can insert at the head of the linked list in constant time"
	}, 

	{
		question: "Which of these changes to a hashtable implementation would not speed it up and is most likely to actually slow down the runtime?",
		image: null,
		answers: [
			{text: 'Making the array bigger', correct: false},
			{text: 'Improving your hash function to spread out the keys better', correct: false},
			{text: 'Changing your hash function to compute the hash faster but return smaller values', correct: true},
			{text: 'Switching your secondary data structure to a red black tree', correct: false}
		],
		correctAnswer: '\"changing your hash function to compute the hash faster but return smaller values.\"',
		explanation: "a smaller range of values means more collisions."
	}, 
	///not actually sure what the correct answer is
	{
		question: "Suppose we are using the hash function below and performing the operations below on the hash table you see. Which value will end up at index 7? Use quadratic probing as your collision resolution strategy.",
		image: "images/collisionres.png",
		answers: [
			{text: '68', correct: false},
			{text: '25', correct: false},
			{text: '31', correct: false},
			{text: 'None (empty)', correct: true}

		],
		correctAnswer: '\" none (empty)\"',
		explanation: "index 7 will remain empty"
	}, 

	{
		question: "Which of the following is the least recommended technique to improve hash table performance (even if it is effective, it has at least one major drawback)?",
		image: null,
		answers: [
			{text: 'Making the hash function generally return larger values that overflow', correct: false}, 
			{text: 'Using the separate chaining method', correct: false},
			{text: 'Using uniform hashing (i.e., making hash function spread the keys out better)', correct: false},
			{text: 'Increasing the hash table size to a large value', correct: true}
		],
		correctAnswer: '\"increasing the hash table size to a large value\"',
		explanation: "when increasing the hash table size, the space complexity will increase as we need to reallocate the memory size of hash table for every collision. Therefore it's not the best technique to avoid collisions. Instead, we can avoid collisions by making the hash function better, using the chaining methods and uniform hashing."
	}, 

	{
		question: "What data structure is most appropriate for simple chaining?",
		image: null,
		answers: [
			{text: 'Singly linked list', correct: true},
			{text: 'Doubly linked list', correct: false},
			{text: 'Circular linked list', correct: false},
			{text: 'Binary tree', correct: false}
		],
		correctAnswer: '\"Singly linked lsit\"',
		explanation: "singly linked list saves space, but still has constant time insert at head."
	}, 

	{
		question: "What is the worst-case complexity of find() when using double-hashing?",
		image: null,
		answers: [
			{text: 'O(n)', correct: false},
			{text: 'O(n log n)', correct: false},
			{text: 'O(log n)', correct: false},
			{text: 'O(1)', correct: true}
		],
		correctAnswer: '\"O(n)\"',
		explanation: "It is still possible that collisions force you to probe through all n items already present in the table before finding an available slot"
	}, 

]


