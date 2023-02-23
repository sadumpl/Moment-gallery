document.getElementById('contacts').insertAdjacentHTML('beforeend', new Date().getFullYear());

for (let i = 1; i < 44; i += 1) {
	document.getElementById('gallery').insertAdjacentHTML('afterbegin', `<img src='./moments/${i}.jpg' />`);
}