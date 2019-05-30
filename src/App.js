import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { data } from "./data";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      // insert properties here
      todoData: data,
      task: "",
      id: "",
      completed: ""
    };
  }
  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      todoData: [...this.state.todoData, newTodo], //newArray with an added todo
      task: "",
      id: "",
      completed: ""
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="app-container">
        <TodoList data={this.state.todoData} />
        <TodoForm
          currentState={this.state}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
