const questions = [ 
	{
		question: "Given the following tree, what is its pre-order traversal?",
		image: "images/q1.png",
		answers: [
			{text: 'G I A D C F E B H J', correct: true},
			{text: 'G I E A C B H D F J', correct: false},
			{text: 'D A F C I B J H E G', correct: false},
			{text: 'D A I F C G B E J H', correct: false}	
		],
		correctAnswer: '\"G I A D C F E B H J\"',
		explanation: "recursively, the pre-order traversal checks the root node, its left child, and then its right child. “D A F C I B J H E G” is the post-order traversal while “D A I F C G B E J H” is the in-order traversal"
	},

	{
		question: "The next two questions will involve the following AVL tree. Part 1: Take the following AVL tree and perform the following three operations on it in order: Insert 1, Insert 3, Delete 4. What will the right child of the left subtree’s root node (start at the root and go left once, then right once) be after the first insert operation?",
		image: "images/q2.png",
		answers: [
			{text: '20', correct: false},
			{text: '4', correct: true},
			{text: '3', correct: false},
			{text: '2', correct: false}
		],
		correctAnswer: '\"4\"',
		explanation: "Insert 1 will cause the left subtree to rotate right to balance it, and 4 will become the new right child of that subtree."
	},

	{
		question: "Part 2: Take the following AVL tree and perform the following three operations on it in order: Insert 1, Insert 3, Delete 4. What will the new value of the left subtree’s root node be after all 3 operations?",
		image: "images/q2.png",
		answers: [
			{text: '20', correct: false},
			{text: '4', correct: false},
			{text: '3', correct: false},
			{text: '2', correct: true}
		],
		correctAnswer: '\"2\"',
		explanation: "Insert 1 will cause the left subtree to rotate right, insert 3 will cause the tree to rotate ____, and delete 4 will cause the tree to ____"
	},

	{
		question: "Part 2: Take the following AVL tree and perform the following three operations on it in order: Insert 1, Insert 3, Delete 4. What will the new value of the left subtree’s root node be after all 3 operations?",
		image: "images/q2.png",
		answers: [
			{text: '20', correct: false},
			{text: '4', correct: false},
			{text: '3', correct: false},
			{text: '2', correct: true}
		],
		correctAnswer: '\"2\"',
		explanation: "Insert 1 will cause the left subtree to rotate right, insert 3 will cause the tree to rotate ____, and delete 4 will cause the tree to ____"
	}, 
]