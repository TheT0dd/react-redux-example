import assert from 'assert';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { fetchTodosEpic } from '../src/epics';
import * as actions from '../src/actions';

const epicMiddleware = createEpicMiddleware(fetchTodosEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('fetchUserEpic', () => {
	let store;

	beforeEach(() => {
		store = mockStore();
	});

	afterEach(() => {
		epicMiddleware.replaceEpic(fetchTodosEpic);
	});

	it('fetches the todos by filter', (done) => {
		const filter = 'all';

		store.dispatch(actions.fetchTodos(filter));

		assert.deepEqual(
			store.getActions()[0],
			actions.fetchTodos(filter)
		);

		setTimeout(() => {
			assert.equal(store.getActions().length, 2);
			done();
		}, 501);
	});
});
