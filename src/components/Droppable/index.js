import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Droppable extends Component {

  handleDrop = (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("transfer");
    e.target.appendChild(document.getElementById(data));
  }
  handleDragOver = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div id={this.props.id} onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
Droppable.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  style: PropTypes.object
}
