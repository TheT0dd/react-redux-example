import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

// route params is availabe in ownProps (2nd arg)
// because of withRouter() (see below)
const mapStateToProps = (state, { params }) => ({
	todos: getVisibleTodos(state, params.filter || 'all')
});

// Generate container component VisibleTodoList
// that is the result of wrapping Todo list twice
// in this order (order matters):
// 1. connect() -> connects to redux store
// 2. withRouter() -> stores route `params` in (own) props
const VisibleTodoList = withRouter(connect(
	mapStateToProps,
	// mapDispatchToProps() shorthand:
	// onTodoClick() will be a function that will call
	// toggleTodo() to generate an action passing through
	// its args in the same order and then call dispatch()
	// to dispatch the action to the store
	{ onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
