//temp fix: make easiest question last

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