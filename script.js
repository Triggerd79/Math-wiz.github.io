let opr;

let n1;

let n2;

let answer;

let input;

let score = 0;

function getRandomItem(arr) {

	// get random index value

	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item

	const item = arr[randomIndex];

	// returning random item

	return item;

}

// function for random number

function randomNum() {

	// get random number 

	let num = parseInt(Math.random() * 10);

	// returning random number 

	return num;

}

// functon for choosing a random number using getRandomItem() 

function operators() {

	// An array containing all the operators

	let operatorsArray = ['+', '-', '/', '*']

	let op = getRandomItem(operatorsArray);

	return op;

}

function gameOver() {

	document.getElementById('num2').innerText = ''

	document.getElementById('num1').innerText = ''

	document.getElementById('operator').innerText = 'Game over'

	e.target.innerText = 'Reset';


}

// function to start the game 

function start() {

	// n1 for 1st random number 

	n1 = randomNum();

	// n2 for 2nd random number

	n2 = randomNum();

	// opr for random number 

	opr = operators();

	// if else if ladder for getting answer according to the operator 

	if (opr == '+') {

		answer = n1 + n2;

	} else if (opr == '-') {

		answer = n1 - n2;

	} else if (opr == '*') {

		answer = n1 * n2;

	} else if (opr == '/') {

		//  checking if n1 and n2 are divisible

		if (n1 % n2 == 0) {

			answer = n1 / n2;

		} else if (n2 % n1 == 0) {

			answer = n2 / n1;

		} else {

			// multiplying n1 with n2 to make n2 and n1 divisible

			n1 = n1 * n2;

			answer = n1 / n2;

		}

	}

	// settings the inner text 

	document.getElementById('num1').innerText = n1;

	document.getElementById('operator').innerText = opr;

	document.getElementById('num2').innerText = n2;

}

// adding event listener to check button 

document.getElementById('check').addEventListener('click', (e) => {

	e.preventDefault();

	input = document.getElementById('userInp').value;

	// checking whether the user input is right or not   

	if (input == answer) {

		start();

		document.getElementById('userInp').value = '';

		score++;

		document.getElementById('score').innerText = `score = ${score}`;

	} else {

		gameOver();

	}

});

document.onload(start())
