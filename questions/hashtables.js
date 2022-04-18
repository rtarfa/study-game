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
		explanation: "While hash tables typically involve a fast look-up, they do take up memory space and ___"
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
		explanation: "---"
	}, 
	///not actually sure what the correct answer is
	{
		question: "Suppose we are using the hash function below and performing the operations below on the hash table you see. Which value will end up at index 7? Use quadratic probing as your collision resolution strategy.",
		image: "images/collisionres.png",
		answers: [
			{text: '68', correct: false},
			{text: '-', correct: true},
			{text: '25', correct: false},
			{text: '31', correct: false}
		],
		correctAnswer: '\"-\"',
		explanation: "---"
	}, 

	{
		question: "Which of the following is not a good technique to avoid collisions?",
		image: null,
		answers: [
			{text: 'Making the hash function appear random', correct: false}, //not 100% sure what this is referring to (pulled this one from a site)
			{text: 'Use the chaining method', correct: false},
			{text: 'Use uniform hashing', correct: false},
			{text: 'Increasing the hash table size', correct: true}
		],
		correctAnswer: '\"increasing the hash table size\"',
		explanation: "when increasing the hash table size, the space complexity will increase as we need to reallocate the memory size of hash table for every collision. Therefore it's not the best technique to avoid collisions. Instead, we can avoid collisions by making the hash function random, use chaining methods and uniform hashing."
	}, 

	//

	{
		question: "What data structure is most appropriate for simple chaining?",
		image: null,
		answers: [
			{text: 'Singly linked list', correct: false},
			{text: 'Doubly linked list', correct: true},
			{text: 'Circular linked list', correct: false},
			{text: 'Binary tree', correct: false}
		],
		correctAnswer: '\"doubly linked lsit\"',
		explanation: "deletion becomes easier with a doubly linked list"
	}, 

	{
		question: "What is the search complexity in direct addressing?", //not sure if this is covered in lecture
		image: null,
		answers: [
			{text: 'O(n)', correct: false},
			{text: 'O(n log n)', correct: false},
			{text: 'O(log n)', correct: false},
			{text: 'O(1)', correct: true}
		],
		correctAnswer: '\"O(1)\"',
		explanation: "direct address tables use arrays which are random access data structure, so, the key values (which are also the index of the array) can be easily used to search the records in constant time."
	}, 

]