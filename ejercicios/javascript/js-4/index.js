let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
console.log(`You got the cards: ${firstCard} and ${secondCard}`);

if (sum <= 20) {
	console.log('Do you want another card? 🤨');
} else if (sum === 21) {
	console.log('Congratulations! You got Blackjack. You won! 🥳');
} else {
	console.log('You are out of the game. You LOST! 😂☠️');
}
