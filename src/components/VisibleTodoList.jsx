import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';


const getVisibleTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'all':
			return todos;
		case 'completed':
			return todos.filter(t => t.completed);
		case 'active':
			return todos.filter(t => !t.completed);
	}
};

const mapStateToProps = (state, ownProps) => ({
	todos: getVisibleTodos(
		state.todos,
		ownProps.filter
	)
});

const mapDispatchToProps = (dispatch) => ({
	onTodoClick(id) {
		dispatch(toggleTodo(id));
	}
});

// Generate container component VisibleTodoList
// that wraps TodoList & connects to the redux store
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
