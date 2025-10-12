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
const closeReisende = document.getElementById ('close-reisende')
const reisendeOverlay = document.getElementById('reisende-overlay')

openReisende?.addEventListener('click', (e) => {
	e.stopPropagation();
	reisendeOverlay.style.display = (reisendeOverlay.style.display === 'block') ? 'none' : 'block';
  });
  closeReisende?.addEventListener('click', (e) => {
	e.stopPropagation();
	reisendeOverlay.style.display = 'none';
  });
  
  /* click-outside to close */
  document.addEventListener('click', (e) => {
	if (!reisendeOverlay.contains(e.target) && e.target !== openReisende) {
	  reisendeOverlay.style.display = 'none';
	}
  });
  
  /* ESC to close */
  document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') reisendeOverlay.style.display = 'none';
  });