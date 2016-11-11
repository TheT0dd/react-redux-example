const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}
			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
};

export default todos;

// Selectors
// ---
// Named exports starting with get that select things
// from the current state. state refers to the todos
// array (just like the state in todos reducer)
export const getVisibleTodos = (state, filter) => {
	switch (filter) {
		case 'all':
			return state;
		case 'completed':
			return state.filter(t => t.completed);
		case 'active':
			return state.filter(t => !t.completed);
	}
};
