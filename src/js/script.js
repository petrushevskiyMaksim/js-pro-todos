import '../scss/style.scss';
import { TODOS_STORAGE_KEY } from './constans';
import { createTodosModel } from './model';
import { createStorage } from './storage';
import { createView } from './view';

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('btn');
const btnClearNode = document.getElementById('clearBtn');

const initialTodos = [];
const model = createTodosModel(initialTodos);
const view = createView('output');
const storage = createStorage(TODOS_STORAGE_KEY);

storage.pull().then(todos => {
	console.log(todos); 

	model.update(todos);
	view.render(model.get());
});

btnNode.addEventListener('click', function () {
	const todo = inputNode.value;

	model.add(todo);

	view.render(model.get());

	storage.push(model.get());
});

btnClearNode.addEventListener('click', function () {
	model.clear();

	view.render(model.get());

	storage.push(model.get());
});
