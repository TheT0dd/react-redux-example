export const fetchTodos = (filter) => ({
	type: 'FETCH_TODOS_REQUEST',
	filter
});

export const addTodo = (text) => ({
	type: 'ADD_TODO_REQUEST',
	text
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO_REQUEST',
	id
});
