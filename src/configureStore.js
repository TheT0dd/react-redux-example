import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import todoApp from './reducers';

const configureStore = () => {
	const middlewares = [promise];
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
