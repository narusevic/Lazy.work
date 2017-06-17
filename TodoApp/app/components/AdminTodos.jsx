import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from '../actions';

import TodoItem from './TodoItem';

class AdminTodos extends React.Component {
  componentDidMount() {
    this.props.getAdminTodos();
  }

  render() {
    if (this.props.loadingTodos) {
      return <div>Loading...</div>;
    }

    if (!this.props.loadingTodos && !this.props.todoItems) {
      return <div>You do not have permissions to access this resource.</div>;
    }

    const todoData = this.props.todoItems || [];

    const todoItems = todoData.map(todoItem => <TodoItem
      key={todoItem.id}
      id={todoItem.id}
      completed={todoItem.completed}
      title={todoItem.title}
    />);

    return (
      <div className="list-group">
        {todoItems}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  loadingTodos: state.admin.loadingTodos,
  todoItems: state.admin.todoItems
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminTodos);
