// import { v4 as uuidv4 } from 'uuid';

export function createTodosModel(todos) {
	return {
		todos,
		update: function (todos) {
			this.todos = todos;
		},
		add: function (todo) {
			this.todos.push(todo);
		},
		get: function () {
			return this.todos;
		},
		clear: function () {
			this.todos = [];
		},
	};
}
