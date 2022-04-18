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
		question: "Choose the sorting algorithm with the fastest (best) worst case runtime:",
		num: 1,
		image: null,
		answers: [
			{text: 'Quicksort', correct: false},
			{text: 'Insertion sort', correct: false},
			{text: 'Bubblesort', correct: false},
			{text: 'They all have the same worst-case', correct: true},
		],
		correctAnswer: '\"They all have the same worst-case\"',
		explanation: "from this list, every algorithm has a worst case runtime of O(n^2)."
	}, 

	{
		question: "Which sort involves using a divide and conquer method?",
		num: 2,
		image: null,
		answers: [
			{text: 'Quicksort', correct: false},
			{text: 'Insertion sort', correct: false},
			{text: 'Mergesort', correct: false},
			{text: 'Two or more of these', correct: true},
		],
		correctAnswer: '\"mergesort and quicksort\"',
		explanation: "mergesort and quicksort both works by recursively breaking down the problem into sub-problems until they become simple enough to be solved directly"
	}, 

	{
		question: "Can insertion sort ever be faster than mergesort?",
		num: 3,
		image: null,
		answers: [
			{text: 'Yes, insertion sort is always faster than mergesort', correct: false},
			{text: 'Yes, but only in some situations', correct: true},
			{text: 'No, since insertion sort\'s worst case runtime is O(n^2)', correct: false},
			{text: 'No, since mergesort has a faster runtime', correct: false},
		],
		correctAnswer: '\"Yes, but only in some situations\"',
		explanation: "while insertion sort's worst case runtime is O(n^2), with smaller input sizes or almost sorted lists, it tends to run faster" //add more to this
	},

	{
		question: "What could cause insertion sort to have a worst case runtime of O(n^2)?", //maybe could is the wrong phrasing
		num: 4,
		image: null,
		answers: [
			{text: 'The list is unsorted', correct: false}, //change this answer
			{text: 'The first unsorted element is at the very end of the list', correct: false},
			{text: 'The list is very big', correct: false},
			{text: 'The list is in reverse sorted order', correct: true},
		],
		correctAnswer: '\"The list is in reverse sorted order\"',
		explanation: "insertion sort builds the final sorted array one element at a time by constantly shifting the first unsorted element so that it's in the relatively right position; the size of the list is n so a bigger list would not affect the big O complexity, although it would take longer"
	},

	{
		question: "Which of the following best explains why Mergesort has a runtime of O(n log n)?", //I'll rewrite it (-Flo)
		num: 5,
		image: null,
		answers: [
			{text: 'Splitting a list in half and recursing on each half always leads to O(n log n) runtime', correct: false},
			{text: 'The recursion Tree has height of log n and each layer of the tree involves O(n) work', correct: true},
			{text: 'The recursion Tree has height n and each layer of the tree involves O(log n) work', correct: false},
			{text: 'The recursion Tree has n total nodes in it, and at each node, we do O(log n) work', correct: false},
		],
		correctAnswer: '\"The recursion Tree has height of log n and each layer of the tree involves O(n) work\"',
		explanation: "The work, is in the linear time merge() step. Each layer of the recursion tree has every element in the original list exactly once for a total of O(n) work."
	},

	{ //redo
		question: "Tom and Mark are arguing about improvements to quicksort.  Tom wants to handle the base-case differently by sorting small lists that are 20 items or less using insertion sort.  Mark thinks this is a bad idea. Which one of the following is the best answer about how Mark can support his claim that this is a bad idea?.",
		num: 6,
		image: null,
		answers: [
			{text: 'Quicksort and insertion sort run in about the same time for small inputs, so there is nothing to gain by doing this.', correct: false},
			{text: 'Insertion sort is quadratic in the worst-case, and so using it for the base case in this way makes the overall order-class for quicksort worse; insertion sort is more likely to have its worst-case time-complexity on small inputs.', correct: true},
			{text: 'Insertion sort is more likely to have its worst-case time-complexity on small inputs.', correct: false},
			{text: 'None of the above, because in fact this is a reasonably good idea (and Mark is wrong).', correct: false}

		],
		correctAnswer: '\"None of the above, because in fact this is a reasonably good idea (and Mark is wrong).\"',
		explanation: "insertion sort is perfect for sorting small lists, as it results in a smaller runtime than sorting for bigger lists" //not good enough explanation
	},

	{
		question: "What is the error in the following pseudocode for bubblesort?",
		num: 7,
		image: "images/bubblesort.png",
		answers: [
			{text: 'The if statement should be comparing list[i] with list[i+1]', correct: false},
			{text: 'The if statement should be comparing list[i] with list[j]', correct: false},
			{text: 'The outer loop checks too few elements; it should loop from 0 to n', correct: false},
			{text: 'The outer loop checks too many elements; it should loop from 0 to n-2', correct: true}
		],
		correctAnswer: '\"The outer loop checks too many elements; it should loop from 0 to n-2\"',
		explanation: "since we are comparing adjacent elements list[j] and list[j+1], we are always checking ahead of the current element for its adjacent element, and for that reason the outer loop should only iterate up till and including the second to last element, in which case our range will be from 0 to n-2."
	},

	{
		question: "True or False: If quicksort is unlucky enough to do its worst-case for every recursive call, it will use extra space (including the stack for recursion) that is the same order class as Mergesort’s space complexity.",
		num: 8,
		image: null,
		answers: [
			{text: 'True', correct: true},
			{text: 'False', correct: false},
			{text: '', correct: false},
			{text: '', correct: false}
		],
		correctAnswer: '\"True\"',
		explanation: "mergesort’s space complexity is O(n), and in quicksort's worst-case for every call, it will use extra space to store __" 
		"it will make n recursive calls on stack all the way down to the base case so both linear space complexity in that situation but both diff reasons)"
	},

	{
		question: "Fill in the blank: The quicksort strategy below desribes ______'s Partition",
		num: 9,
		image: "images/lomuto",
		answers: [
			{text: 'Hoare', correct: false},
			{text: 'Lomuto', correct: true},
			{text: 'Dansfield', correct: false},
			{text: 'None of the above', correct: false}
		],
		correctAnswer: '\"Lomuto\'s Partition\"',
		explanation: "In Hoare's parition, the strategyis to  move low up until something > pivot found, then move high down until something <= pivot found, swap items at low and high, then when done, swap items at high and pivot to put pivot in place"
	},

	{
		question: "True or False: Quicksort is an in-place algorithm",
		num: 10,
		image: null,
		answers: [
			{text: 'True', correct: true},
			{text: 'False', correct: false},
			{text: '', correct: false},
			{text: '', correct: false}
		],
		correctAnswer: '\"True\"',
		explanation: "if you don't count the recursive stack, Quicksort doesn't create a new array to store elements like mergesort usually does"
	},

]


