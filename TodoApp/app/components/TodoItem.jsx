import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import * as actionCreators from '../actions';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      editEnabled: false,
      editText: this.props.title
    };
  }
  toggleEdit() {
    this.setState({
      editEnabled: true
    });
  }
  updateTodo(e) {
    e.preventDefault();

    const item = {
      id: this.props.id,
      title: this.state.editText,
      completed: this.props.completed
    };

    this.props.updateTodo(item);

    this.setState({
      editEnabled: false
    });
  }
  toggleTodo() {
    const item = {
      id: this.props.id,
      title: this.props.title,
      completed: !this.props.completed
    };

    this.props.updateTodo(item);
  }
  handleChange(e) {
    this.setState({
      editText: e.target.value
    });
  }
  render() {
    const toggleIconClass = `glyphicon ${this.props.completed ? 'glyphicon-ok' : 'glyphicon-remove'}`;
    let titleSection;
    if (this.state.editEnabled) {
      titleSection = (
        <form onSubmit={this.updateTodo}>
          <input
            type="text"
            className="todo-item-edit-input"
            value={this.state.editText}
            onChange={this.handleChange}
            autoFocus
          />
          <input type="submit" hidden />
        </form>
      );
    } else {
      titleSection = <span>{this.props.title}</span>;
    }
    return (
      <div className="todo-item list-group-item">
        <button
          onClick={this.toggleTodo}
          className="todo-item-toggle"
        >
          <i className="todo-item-status" >
            <span className={toggleIconClass} />
          </i>
        </button>
        <div className="todo-item-text-container" onDoubleClick={this.toggleEdit}>
          {titleSection}
        </div>
        <button
          className="todo-item-delete"
          onClick={() => { this.props.removeTodo(this.props.id); }}
        >
          <span className="glyphicon glyphicon-remove remove-button" />
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(TodoItem);
