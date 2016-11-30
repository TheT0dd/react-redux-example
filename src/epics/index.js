import { normalize } from 'normalizr';
import { combineEpics } from 'redux-observable';
import { Observable } from './provider/rx';
import * as schema from './schema';
import * as api from '../api';


export const fetchTodosEpic = ($action, store) =>
	$action.ofType('FETCH_TODOS_REQUEST').
		switchMap(({ filter }) =>
			Observable.fromPromise(api.fetchTodos(filter)).
			map(response => ({
				type: 'FETCH_TODOS_SUCCESS',
				filter,
				response: normalize(response, schema.arrayOfTodos)
			})).
			catch(error => Observable.of({
				type: 'FETCH_TODOS_FAILURE',
				filter,
				message: error.message || 'Something went wrong.'
			}))
		);

export const addTodoEpic = ($action, store) =>
	$action.ofType('ADD_TODO_REQUEST').
		mergeMap(({ text }) =>
			Observable.fromPromise(api.addTodo(text)).
			map(response => ({
				type: 'ADD_TODO_SUCCESS',
				response: normalize(response, schema.todo)
			}))
		);

export const toggleTodoEpic = ($action, store) =>
	$action.ofType('TOGGLE_TODO_REQUEST').
		mergeMap(({ id }) =>
			Observable.fromPromise(api.toggleTodo(id)).
			map(response => ({
				type: 'TOGGLE_TODO_SUCCESS',
				response: normalize(response, schema.todo)
			}))
		);

export default combineEpics(
	fetchTodosEpic,
	addTodoEpic,
	toggleTodoEpic
);
