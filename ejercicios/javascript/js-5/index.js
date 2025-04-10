let fruits = ['🍎', '🍊', '🍎', '🍎', '🍊'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');
let fruitsEl = document.getElementById('fruitsEl');

for (let fruit = 0; fruit < fruits.length; fruit++) {
	fruitsEl.textContent += ' ' + fruits[fruit];
}

let maxClicks = 0;
function sortFruits() {
	if (maxClicks < 1) {
		for (let i = 0; i < fruits.length; i++) {
			if (fruits[i] === '🍎') {
				appleShelf.textContent += fruits[i];
			} else if (fruits[i] === '🍊') {
				orangeShelf.textContent += fruits[i];
			}
		}
		maxClicks = 1;
	}
}
