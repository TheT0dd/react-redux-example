import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
	all: createList('all'),
	active: createList('active'),
	completed: createList('completed')
});

const todos = combineReducers({
	byId,
	listByFilter
});

export default todos;

// Selectors
// ---
// Functions starting with get that select things
// from the current state. state refers to the todos
// object (just like the state in todos reducer)

export const getVisibleTodos = (state, filter) => {
	const ids = fromList.getIds(state.listByFilter[filter]);
	return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) => {
	return fromList.getIsFetching(state.listByFilter[filter]);
};

export const getErrorMessage = (state, filter) => {
	return fromList.getErrorMessage(state.listByFilter[filter]);
};
