import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

// Provider component takes the store as a prop
// and stores it in context, making it available
// to any components that wish to connect to it
// (see connect() from 'react-redux')
render(
	<Root store={store} />,
	document.getElementById('app')
);
