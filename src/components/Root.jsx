import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

// Provider component takes the store as a prop
// and stores it in context, making it available
// to any components that wish to connect to it
// (see connect() from 'react-redux')
const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/(:filter)' component={App} />
		</Router>
	</Provider>
);

export default Root;
