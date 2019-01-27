import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  state = {
    done: this.props.task.done
  };

  toggleStatus = () => {
    const newStatus = !this.state.done;
    this.setState({ done: newStatus });
  };

  render() {
    const task = this.props.task;
    const deleteTask = this.props.deleteTask;

    const statusIcon = () => {
      if (this.state.done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <tr className="row">
        <td>
          <i className={statusIcon()} onClick={this.toggleStatus} />
        </td>
        <td>{task.task}</td>
        <td className={task.priority}>{task.priority.toUpperCase()}</td>
        <td>
          <i className="fa fa-times" onClick={() => deleteTask(task.id)} />
        </td>
      </tr>
    );
  }
}

export default TableRow;
