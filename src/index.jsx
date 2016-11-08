import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';

const persistedState = {
	todos: [{
		id: '0',
		text: 'Welcome back!',
		completed: false
	}]
};

const store = createStore(
	todoApp,
	persistedState
);

console.log(store.getState());

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
