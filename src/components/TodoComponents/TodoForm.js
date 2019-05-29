// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";
class TodoForm extends React.Component {
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.props.addTodo}>
          <input
            placeholder="Enter New Todo"
            type="string"
            name="todo"
            value={this.props.currentState.task}
            onChange={this.props.handleChange}
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
