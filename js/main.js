const contacts = document.getElementById('contacts');
contacts.insertAdjacentHTML('beforeend', new Date().getFullYear());

for (let i = 1; i < 44; i += 1) {
	const gallery = document.getElementById('gallery');
	gallery.insertAdjacentHTML('afterbegin', `<img src='./moments/${i}.jpg' />`);
}

