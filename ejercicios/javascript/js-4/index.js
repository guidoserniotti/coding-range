let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let message = '';
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.querySelector('#sum-el');

function startGame() {
	cardsEl.textContent += ' ' + firstCard + ', ' + secondCard;
	sumEl.textContent += ' ' + sum;
	messageEl.textContent = '';
	if (sum <= 20) {
		message = 'Do you want another card?';
	} else if (sum === 21) {
		message = 'You got Blackjack. You won!';
	} else {
		message = 'You are out of the game.';
	}
	messageEl.textContent = message;
}

function newCard() {
	console.log('Drawing a new card from the deck!');
}
