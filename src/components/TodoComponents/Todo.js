// component that takes in the todo data and displays the task to the screen.

import React from "react";
class Todo extends React.Component {
  render() {
    return <div className="todo">{this.props.todoOnProps.task}</div>;
  }
}

export default Todo;
