
import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status : this.props.task.status,
    }

     this.clicked = this.clicked.bind(this);
    
  }

  clicked(){
    this.setState({status : !this.state.status})
    console.log(this.state.status)
  }

  render() {
    let statIcon = () => {
      return this.state.status
        ? "fa fa-check-circle"
        : "fa fa-times-circle";
    };

    let iconColor = () => {
      return this.state.status ? { color: "green" } : { color: "red" };
    };

    let taskPriority = () => {
      if (this.props.task.priority === "high") return { color: "red" };
      else if (this.props.task.priority === "medium")
        return { color: "orange" };
      else return { color: "green" };
    };

    return (
      <tr className="row">
        <td onClick={this.clicked}>
          <i className={statIcon()} style={iconColor()} />
        </td>
        <td>{this.props.task.taskName}</td>
        <td style={taskPriority()}>{this.props.task.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;