const bloglist = document.querySelector('#blogs-list');
const form = document.querySelector('#my-it-blogs');
function renderblogs(doc){
	let li = document.createElement('li');
	let title = document.createElement('h1');
	let description = document.createElement('p');

	li.setAttribute('data-id', doc.id);
	title.textContent = doc.data().Title;
	description.textContent = doc.data().description;
	li.appendChild(title);
	li.appendChild(description);

	bloglist.appendChild(li);

}

db.collection('my-blogs').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderblogs(doc);
	})

})

//saving data

form.addEventListener('submit', (e) =>{
	e.preventDefault();
	db.collection('my-blogs').add({
		title : form.title.value,
		description : form.description.value,
		date: form.date.value,

	})
	form.title.value ='';
	form.description.value = '';
	form.date.value = '';
})