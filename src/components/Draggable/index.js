import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Draggable extends Component {

  handleDrag = (e) => {

     e.dataTransfer.setData("transfer",e.target.id);
  }
  handleDragOver = (e) => {
    e.stopPropagation();
  }
  render() {
    return (
      <div id={this.props.id} draggable={true} onDragStart={this.handleDrag} onDragOver={this.handleDragOver} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
Draggable.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  style: PropTypes.object
}