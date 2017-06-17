import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from '../actions';

import TodoItem from './TodoItem';

class TodoAppList extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.state = {
      newTodo: ''
    };
  }
  componentDidMount() {
    this.props.getAppTodos();
  }
  handleNewTodoChange(e) {
    this.setState({
      newTodo: e.target.value
    });
  }
  addTodo(e) {
    e.preventDefault();

    if (this.state.newTodo === '') return;

    this.props.addTodo(this.state.newTodo);

    this.setState({
      newTodo: ''
    });
  }
  render() {
    if (!this.props.userInfo) {
      return <div>Please log in to see your todos!</div>;
    }

    const todoData = this.props.todoItems ? this.props.todoItems : [];

    const todoItems = todoData.map(todoItem => <TodoItem
      key={todoItem.id}
      id={todoItem.id}
      completed={todoItem.completed}
      title={todoItem.title}
    />);

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleNewTodoChange}
            className="form-control"
          />
          <input type="submit" hidden />
        </form>
        <div className="list-group">
          {todoItems}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  todoItems: state.todoItems,
  userInfo: state.userInfo.userInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppList);
