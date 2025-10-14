const openButton = document.getElementById('open-date-button')
const closeButton = document.getElementById('close-date-button')
const dateOverlay = document.getElementById('date-overlay')

openButton.addEventListener('click', () => {
	dateOverlay.style.display = 'inline' ;
});

closeButton.addEventListener('click', () => {
	dateOverlay.style.display = 'none';
});


const openReisende = document.getElementById ('open-reisende')
const closeReisende = docyment.getElementById ('close-reisende')
const reisendeOverlay = document.getElementById('reisende-overlay')

openReisende.addEventListener ('click', () => {
	reisendeOverlay.style.display = 'inline' ;
})

closeReisende.addEventListener ('click', () => {
	reisendeOverlay.style.display = 'none' ;
})