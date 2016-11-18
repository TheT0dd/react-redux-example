import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';
import TodoList from './TodoList';
import FetchError from './FetchError';

class VisibleTodoList extends Component {
	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			this.fetchData();
		}
	}

	fetchData() {
		const { filter, fetchTodos } = this.props;
		// fetches todos (async)
		fetchTodos(filter);
	}

	render() {
		const { isFetching, errorMessage, toggleTodo, todos } = this.props;
		if (isFetching && !todos.length) {
			return <p>Loading...</p>;
		}
		if (errorMessage && !todos.length) {
			return (
				<FetchError
					message={errorMessage}
					onRetry={() => this.fetchData()}
				/>
			);
		}
		return (
			<TodoList
				todos={todos}
				onTodoClick={toggleTodo}
			/>
		);
	}
}

// route params is availabe in ownProps (2nd arg) because of withRouter()
// NOTE: we also use mapStateToProps() to pass ownProps.params.filter as
// `filter` prop to the child component we are wrapping with connect
const mapStateToProps = (state, { params }) => {
	const filter = params.filter || 'all';
	return {
		todos: getVisibleTodos(state, filter),
		isFetching: getIsFetching(state, filter),
		errorMessage: getErrorMessage(state, filter),
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
	// creates an action dispatcher for each action creator
	// found inside the `actions` namespace import
	actions
)(VisibleTodoList));

export default VisibleTodoList;
