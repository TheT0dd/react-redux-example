import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';
import todoApp from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
	const middlewares = [];
	const sagaMiddleware = createSaga();
	middlewares.push(sagaMiddleware);
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}

	const store = createStore(
		todoApp,
		// optional preloaded state would be the 2nd arg
		// preloadedState,
		applyMiddleware(...middlewares) // enhancer
	);

	sagaMiddleware.run(rootSaga);

	return store;
};

export default configureStore;
