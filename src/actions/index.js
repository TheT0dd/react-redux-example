import { v4 } from 'node-uuid';
import * as api from '../api';

const requestTodos = (filter) => ({
	type: 'REQUEST_TODOS',
	filter: filter
});

const receiveTodos = (filter, response) => ({
	type: 'RECEIVE_TODOS',
	filter,
	response
});

// Action creator that returns a "thunk".
// A thunk is function returned from another function
// and in this case we use thunks as a means of
// dispatching multiple times during the course of
// a single action
export const fetchTodos = (filter) => (dispatch) => {
	dispatch(requestTodos(filter));
	return api.fetchTodos(filter).then(response => {
		dispatch(receiveTodos(filter, response));
	});
};
