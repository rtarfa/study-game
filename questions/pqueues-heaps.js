const questions = [ 

	//questions on heaps
	{
		question: "True or False: Heapsort is an unstable sort",
		image: null,
		answers: [
			{text: 'True', correct: true},
			{text: 'False', correct: false},
			{text: '', correct: false},
			{text: '', correct: false}	
		],
		correctAnswer: '\"True\"',
		explanation: "stable means if the two elements have the same key, they remain in the same order or positions, but that's not the case for Heap sort. Operations on the heap can change the relative order of equal items."
	},

	{
		question: "True or False: A heap is guaranteed to be sorted.",
		image: null,
		answers: [
			{text: 'True', correct: false},
			{text: 'False', correct: true},
			{text: '', correct: false},
			{text: '', correct: false}	
		],
		correctAnswer: '\"False\"',
		explanation: "while heaps do guarantee sorting, they only guarantee a \"partial\" ordering of nodes"
	},

	{
		question: "True or False: A binary heap is a binary search tree.",
		image: null,
		answers: [
			{text: 'True', correct: false},
			{text: 'False', correct: true},
			{text: '', correct: false},
			{text: '', correct: false}	
		],
		correctAnswer: '\"False\"',
		explanation: "while a binary heap is a binary tree, it does not retain the properties of a binary search tree. Rather, a binary heap is an almost complete binary tree."
	},

	{
		question: "Fill in the blank: For every non-root node X in a min-heap, the key in the parent of X is ____ the key in X. Thus, the tree is partially ordered.",
		image: null,
		answers: [
			{text: '<', correct: false},
			{text: '>=', correct: false},
			{text: '<=', correct: true},
			{text: '>', correct: false}
		],
		correctAnswer: '\"<=\"',
		explanation: "this desceribes the heap ordering property."
	},

	//questions on priority queues
	{
		question: "What are the (respective) runtimes of the push, peek, and poll operations of a SORTED ARRAY priority queue?",
		image: null,
		answers: [
			{text: 'O(1), O(n), O(n)', correct: false},
			{text: 'O(n), O(1), O(1)', correct: true},
			{text: 'O(n), O(n), O(1)', correct: false},
			{text: 'O(1), O(1), O(1)', correct: false}
		],
		correctAnswer: '\"O(n), O(1), O(1)\"',
		explanation: "the array is sorted, so for push, we must loop through n array elements to find the correct placement for the one being pushed, for peek, we are simply getting the element at the first index of the array, and for poll, we are also just returning the element at the first index of the array and removing it."
	},

	{
		question: "What are the (respective) runtimes of the push, peek, and poll operations of a HASHTABLE priority queue?",
		image: null,
		answers: [
			{text: 'O(1), O(n), O(n)', correct: true},
			{text: 'O(n), O(1), O(1)', correct: false},
			{text: 'O(n), O(n), O(1)', correct: false},
			{text: 'O(1), O(1), O(1)', correct: false}
		],
		correctAnswer: '\"O(n), O(1), O(1)\"',
		explanation: "---"}, 
	{
		question: "Which of the following is not an application of priority queue?",
		image: null,
		answers: [
			{text: 'Huffman codes', correct: false},
			{text: 'Interrupt handling in operating system', correct: false},
			{text: 'Undo operation in text editors', correct: true},
			{text: 'Bayesian spam filter', correct: false}
		],
		correctAnswer: '\"Undo operation in text editors\"',
		explanation: "undo operations can be achieved with a stack"}, 
	{
		question: "What's the error in the code below that inserts elements into the list based on the given key value (head and tail are dummy nodes to mark the end and beginning of the list; they don't contain any values).",
		image: "images/pqueue.png",
		answers: [
			{text: 'Change Node cur = dup to Node cur = head', correct: true},
			{text: 'Change dup = cur.getNext() to dup = cur', correct: false},
			{text: 'Remove && (dup!=trail)', correct: false},
			{text: 'cur.setNext(dup);', correct: false}
		],
		correctAnswer: '\"Node cur = dup should be Node cur = head\"',
		explanation: "--"},
]