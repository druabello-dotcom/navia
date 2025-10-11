const openButton = document.getElementById('open-date-button')
const closeButton = document.getElementById('close-date-button')
const dateOverlay = document.getElementById('date-overlay')

openButton.addEventListener('click', () => {
	dateOverlay.style.display = 'inline' ;
});

closeButton.addEventListener('click', () => {
	dateOverlay.style.display = 'none';
});