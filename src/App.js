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

    this.toggleStatus = this.toggleStatus.bind(this);
  }

  toggleStatus(id) {
    const tasks = this.state.tasks;
    const task = tasks.find(task => task.id === id);
    task.done = !task.done;
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <TodoList tasks={tasks} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}

export default App;
