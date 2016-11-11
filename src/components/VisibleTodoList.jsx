import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
	componentDidMount() {
		fetchTodos(this.props.filter).then(todos =>
			console.log(this.props.filter, todos)
		);
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			fetchTodos(this.props.filter).then(todos =>
				console.log(this.props.filter, todos)
			);
		}
	}

	render() {
		return <TodoList {...this.props} />;
	}
}

// route params is availabe in ownProps (2nd arg) because of withRouter()
// NOTE: we also use mapStateToProps() to pass ownProps.params.filter as
// `filter` prop to the child component we are wrapping with connect
const mapStateToProps = (state, { params }) => {
	const filter = params.filter || 'all';
	return {
		todos: getVisibleTodos(state, filter),
		filter
	};
};

// Generate container component VisibleTodoList that is the result of
// wrapping Todo list twice in this order (order matters):
// 1. connect() -> connects to redux store
// 2. withRouter() -> stores route `params` in (own) props
VisibleTodoList = withRouter(connect(
	mapStateToProps,
	// mapDispatchToProps() shorthand:
	// onTodoClick() will be a function that will call
	// toggleTodo() to generate an action passing through
	// its args in the same order and then call dispatch()
	// to dispatch the action to the store
	{ onTodoClick: toggleTodo }
)(VisibleTodoList));

export default VisibleTodoList;
