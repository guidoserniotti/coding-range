let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let resultParagraph = document.getElementById('sum-el');

function add() {
	resultParagraph.textContent = 'Sum: ';
	let sum = num1 + num2;
	resultParagraph.textContent += sum;
}
function subtract() {
	resultParagraph.textContent = 'Sum: ';
	let sub = num1 - num2;
	resultParagraph.textContent += sub;
}
function divide() {
	resultParagraph.textContent = 'Sum: ';
	let div = num1 / num2;
	resultParagraph.textContent += div;
}
function multiply() {
	resultParagraph.textContent = 'Sum: ';
	let mul = num1 * num2;
	resultParagraph.textContent += mul;
}
