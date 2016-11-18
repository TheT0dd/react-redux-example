import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';

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
