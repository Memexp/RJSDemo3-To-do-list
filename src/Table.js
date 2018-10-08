import React, { Component } from "react";

import "./App.css";

import TableRow from "./TableRow";

class Table extends Component {
  render() {
    let taskRow = this.props.tasks.map(task => {
      return <TableRow task={task} key={task.taskName} />;
    });

    return (
      <table className="table">
        <tbody>
          <tr className="headerRow">
            <th>STAT</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
          {taskRow}
        </tbody>
      </table>
    );
  }
}
export default Table;
