let count = 0;
let counterTitle = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function addPerson() {
	count += 1;
	counterTitle.innerText = count;
}

function save() {
	let entry = ' ' + counterTitle.innerText + ' - ';
	saveEl.innerText += entry;
	count = 0;
	counterTitle.innerText = 0;
}
