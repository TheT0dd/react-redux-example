let nextTodoId = 0;
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text: text,
		id: nextTodoId++
	};
};

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id: id
	};
};

export const setVisiblityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter: filter
	};
};
