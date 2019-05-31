// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }
  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: ""
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.addTodo}>
          <input
            placeholder="Enter New Todo"
            type="string"
            name="task"
            // name="todo"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
        <button onClick={this.props.clearTodo}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
