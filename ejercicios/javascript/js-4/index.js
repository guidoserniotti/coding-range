let player = {
	name: 'Guido',
	chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1;
	if (randomCard === 1) {
		return 11;
	} else if (randomCard > 10) {
		return 10;
	} else {
		return randomCard;
	}
}

function renderGame() {
	cardsEl.textContent = 'Cards: ';

	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ', ';
	}

	sumEl.textContent = 'Sum: ' + sum;
	messageEl.textContent = '';
	if (sum <= 20) {
		message = 'Do you want another card?';
		isAlive = true;
		hasBlackjack = false;
	} else if (sum === 21) {
		message = 'You got Blackjack. You won!';
		hasBlackjack = true;
	} else {
		message = 'You are out of the game.';
		isAlive = false;
	}
	messageEl.textContent = message;
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let newCard = getRandomCard();
		sum += newCard;
		cards.push(newCard);
		renderGame();
	}
}

let sentence = ['Hello', 'my', 'name', 'is', 'Guido'];
let greetingEl = document.getElementById('greeting-el');

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++) {
	greetingEl.textContent += sentence[i] + ' ';
}
