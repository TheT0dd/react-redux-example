import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(
	todoApp,
	persistedState
);

store.subscribe(throttle(() => {
	saveState({
		todos: store.getState().todos
	});
}, 1000));

// Provider component takes the store as a prop
// and stores it in context, making it available
// to any components that wish to connect to it
// (see connect() from 'react-redux')
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
