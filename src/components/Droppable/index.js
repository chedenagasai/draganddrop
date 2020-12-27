import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Droppable extends Component {

  handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("test");
    e.target.appendChild(document.getElementById(data));
  }
  handleDragOver = (e) => {
    e.preventDefault();
  }
  render() {
    let { id, style } = this.props;
    return (
      <div id={id} onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={style}>
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
