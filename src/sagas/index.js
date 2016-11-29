import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';


function *fetchTodosAsync({ filter }) {
	try {
		const response = yield call(api.fetchTodos, filter);
		yield put({
			type: 'FETCH_TODOS_SUCCESS',
			filter,
			response: normalize(response, schema.arrayOfTodos)
		});
	}
	catch(error) {
		yield put({
			type: 'FETCH_TODOS_FAILURE',
			filter,
			message: error.message || 'Something went wrong.'
		});
	}
}

function *addTodoAsync({ text }) {
	const response = yield call(api.addTodo, text);
	yield put({
		type: 'ADD_TODO_SUCCESS',
		response: normalize(response, schema.todo)
	});
}

function *toggleTodoAsync({ id }) {
	const response = yield call(api.toggleTodo, id);
	yield put({
		type: 'TOGGLE_TODO_SUCCESS',
		response: normalize(response, schema.todo)
	});
}

// Root Saga: single entry point to start all other Sagas at once
export default function *rootSaga() {
	yield [
		// takeLatest: don't allow multiple *fetchTodosAsync()
		// sagas to run at the same time. When a new one starts,
		// force stop the previous one
		// NOTE: this resembles the Observable's switchMap() operator
		takeLatest('FETCH_TODOS_REQUEST', fetchTodosAsync),
		// takeLatest: unlike takeLatest, allow multiple
		// sagas to run at the same time
		// NOTE: this resembles the Observable's mergeMap() operator
		takeEvery('ADD_TODO_REQUEST', addTodoAsync),
		takeEvery('TOGGLE_TODO_REQUEST', toggleTodoAsync)
	];
}
