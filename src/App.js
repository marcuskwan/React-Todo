import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      // insert properties here
      todos
    };
  }
  toggleItem = id => {
    this.setState(previousState => {
      return {
        todos: previousState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    });
  };
  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState(previousState => {
      return {
        todos: [...previousState.todos, newTodo]
      };
    });
  };
  clearTodo = event => {
    event.preventDefault();
    this.setState(previousState => {
      return {
        todos: previousState.todos.filter(todo => {
          return !todo.completed;
        })
      };
    });
  };
  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <TodoForm
          currentState={this.state}
          addTodo={this.addTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
