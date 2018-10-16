import React, { Component } from "react";

import "./App.css";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    let taskRows = this.props.tasks.map(task => (
      <TodoItem
        task={task}
        key={task.task}
        deleteTask={this.props.deleteTask}
      />
    ));

    return (
      <table className="table">
        <thead>
          <tr className="headerRow">
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>{taskRows}</tbody>
      </table>
    );
  }
}
export default TodoList;
