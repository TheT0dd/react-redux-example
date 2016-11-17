import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import todoApp from './reducers';

const thunk = (store) => (next) => (action) => {
	// handle function (or "thunk") actions
	return typeof action === 'function' ?
		action(store.dispatch) :
		next(action);
};

const configureStore = () => {
	const middlewares = [thunk];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}

	return createStore(
		todoApp,
		// optional preloaded state would be the 2nd arg
		// preloadedState,
		applyMiddleware(...middlewares) // enhancer
	);
};

export default configureStore;
