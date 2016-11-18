import { v4 } from 'node-uuid';
import { getIsFetching } from '../reducers';
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
// a single action.
// Though there is no specific return value required
// by the thunk middleware, we choose to return a
// promise that is resolved once everything is done
// Also, both dispatch & getState functions are passed
// to the thunk by the thunk middleware
export const fetchTodos = (filter) => (dispatch, getState) => {
	// don't fetch again if data is already being fetched
	if (getIsFetching(getState(), filter)) {
		return Promise.resolve();
	}
	dispatch(requestTodos(filter));
	return api.fetchTodos(filter).then(response => {
		dispatch(receiveTodos(filter, response));
	});
};
