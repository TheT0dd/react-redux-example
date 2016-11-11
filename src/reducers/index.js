import {combineReducers} from 'redux';
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
	todos: todos
});

export default todoApp;

// Selectors
// ---
// All selectors are gathered here and each is
// mapped to a state slice (similar to what
// combineReducers() does with reducers)
export const getVisibleTodos = (state, filter) =>
	fromTodos.getVisibleTodos(state.todos, filter);
