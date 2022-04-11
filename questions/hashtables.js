const questions = [ 
	{
		question: "True or false: Hash tables are usually fast and don’t waste any memory space as well",
		image: null,
		answers: [
			{text: 'True', correct: false},
			{text: 'False', correct: true},
		],
		correctAnswer: '\"False\"',
		explanation: "While hash tables typically involve a fast look-up, they do take up memory space and ___"
	}, 

	{
		question: "True or false: Hash functions need to be fast for the hash table to work correctly",
		image: null,
		answers: [
			{text: 'True', correct: false},
			{text: 'False', correct: true},
		],
		correctAnswer: '\"False\"',
		explanation: "Needs to be fast for it to be fast"
	}, 

	{
		question: "What are the best case and worst case runtimes for the insert() operation in a hashtable with separate chaining? You may assume that the hash table allows for duplicate values to be inserted. All answers should be tight bounds.",
		image: null,
		answers: [
			{text: 'Best: O(n); Worst: O(n2)', correct: false},
			{text: 'Best: O(1); Worst: O(n)', correct: false},
			{text: 'Best: O(n); Worst: O(n)', correct: false},
			{text: 'Best: O(1); Worst: O(1)', correct: true}
		],
		correctAnswer: '\"Best: O(1); Worst: O(1)\"',
		explanation: "You may assume the hashtable allows for duplicate values; bc can assume, you can insert at the head of the linked list in constant time"
	}, 

	{
		question: "Which of these changes to a hashtable implementation would not speed up and is most likely to actually slow down the runtime?",
		image: null,
		answers: [
			{text: 'Making the array bigger', correct: false},
			{text: 'Improving your hash function to spread out the keys better', correct: false},
			{text: 'Changing your hash function to compute the hash faster but return smaller values', correct: true},
			{text: 'Switching your secondary data structure to a red black tree', correct: false}
		],
		correctAnswer: '\"Changing your hash function to compute the hash faster but return smaller values\"',
		explanation: "idk exblain"
	}, 
]