const refs = {
	addTaskBtn: document.querySelector('#addTask'),
	task: document.querySelector('#inputTask'),
	list: document.querySelector('.todo__list'),
};

refs.addTaskBtn.addEventListener('click', () => {
	const { task, list } = refs;
	const li = document.createElement('li');
	const deleteBtn = document.createElement('button');
	li.classList.add('todo__item');
	deleteBtn.innerText = 'Delete';
	li.innerText = task.value;
	li.appendChild(deleteBtn);
	list.appendChild(li);
	task.value = '';
	saveList(list.innerHTML);
});

refs.list.addEventListener('click', (e) => {
	if (e.target.nodeName === 'BUTTON') {
		refs.list.removeChild(e.target.parentNode);
		saveList(refs.list.innerHTML);
	}
});

function saveList(list) {
	window.localStorage.setItem('toDoList', JSON.stringify(list));
}

function loadList() {
	let storedList = window.localStorage.getItem('toDoList');

	if (storedList !== null) {
		list = JSON.parse(storedList);
		refs.list.innerHTML = list;
	}
}

loadList();
