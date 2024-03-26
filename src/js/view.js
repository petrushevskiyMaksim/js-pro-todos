export function createView(selector) {
	const node = document.getElementById(selector);

	return {
		node,
		render: function (todos) {
			let outputListHTML = '';

			todos.forEach(todo => {
				outputListHTML += `<li>${todo}</li>`;
			});

			this.node.innerHTML = `<ul>${outputListHTML}</ul>`;
		},

		// addTodo: function (todo) {
		// 	const div = document.createElement('div');
		// 	const input = document.createElement('input');
		// 	const lable = document.createElement('lable');

		// 	input.setAttribute('type', 'checkbox');
		// 	input.setAttribute('id', todo.id);

		// 	input.onclick = () => {
		// 		console.log(123);
		// 	};

		// 	if (todo.done) {
		// 		input.setAttribute('checked', true);
		// 	}

		// 	lable.innerText = todo.title;
		// 	lable.setAttribute('for', todo.id);

		// 	div.append(input, lable);

		// 	this.node.append(div);
		// },
	};
}
