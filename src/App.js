import React, { Component } from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    };

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
