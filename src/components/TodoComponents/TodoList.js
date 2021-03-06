// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from "react";
import "./Todo.css";
import Todo from "./Todo";
class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => (
          <Todo key={todo.id} toggleItem={this.props.toggleItem} todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
