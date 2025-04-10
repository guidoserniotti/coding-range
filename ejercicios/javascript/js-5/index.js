let fruits = ['🍎', '🍊', '🍎', '🍎', '🍊'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruits() {
	for (let i = 0; i < fruits.length; i++) {
		if (fruits[i] === '🍎') {
			appleShelf.textContent += fruits[i];
		} else if (fruits[i] === '🍊') {
			orangeShelf.textContent += fruits[i];
		}
	}
}

sortFruits();
