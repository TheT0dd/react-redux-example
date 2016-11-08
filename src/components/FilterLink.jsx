import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import { setVisiblityFilter } from '../actions';


const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick() {
		dispatch(setVisiblityFilter(ownProps.filter));
	}
});

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

export default FilterLink;
