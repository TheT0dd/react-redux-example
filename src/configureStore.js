import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import todoApp from './reducers';
import rootEpic from './epics';

const configureStore = () => {
	const middlewares = [];
	middlewares.push(createEpicMiddleware(rootEpic));
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
