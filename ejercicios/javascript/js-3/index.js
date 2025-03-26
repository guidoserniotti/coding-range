let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let resultParagraph = document.getElementById('sum-el');

function add() {
	resultParagraph.textContent = 'Sum: ';
	let result = num1 + num2;
	resultParagraph.textContent += result;
}
function subtract() {
	resultParagraph.textContent = 'Sum: ';
	let result = num1 - num2;
	resultParagraph.textContent += result;
}
function divide() {
	resultParagraph.textContent = 'Sum: ';
	let result = num1 / num2;
	resultParagraph.textContent += result;
}
function multiply() {
	resultParagraph.textContent = 'Sum: ';
	let result = num1 * num2;
	resultParagraph.textContent += result;
}
