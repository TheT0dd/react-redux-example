import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {
	let input;
	return (
		<div>
			<input ref={node => {
				input = node;
			}} />
			<button onClick={() => {
				dispatch(addTodo(input.value));
				input.value = '';
			}}>
				Add Todo
			</button>
		</div>
	);
};
// Generate container component AddTodo
// that wraps & replaces original AddTodo
// without subscribing to the store
// NOTE: connect() with omitted args
// 1st arg omit -> does not subscribe to the store
// 2nd arg omit -> simply passes dispatch through into props obj
// NOTE: it is common to connect to the
// store without subscribing, as a means to
// get access to the dispatch method that
// allows the component to dispatch events
AddTodo = connect()(AddTodo);

export default AddTodo;
