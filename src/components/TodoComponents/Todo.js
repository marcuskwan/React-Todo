// component that takes in the todo data and displays the task to the screen.

import React from "react";
class Todo extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.todo.completed ? " completed" : ""}`}
        onClick={() => this.props.toggleItem(this.props.todo.id)}
      >
        {this.props.todo.task}
      </div>
    );
  }
}

export default Todo;
