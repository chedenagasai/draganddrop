import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Draggable extends Component {

  handleDrag = (e) => {
    e.dataTransfer.setData("test", e.target.id);
  }
  handleDragOver = (e) => {
    e.stopPropagation();
  }
  render() {
    let { id, style } = this.props;
    return (
      <div id={id} draggable={true} onDragStart={this.handleDrag} onDragOver={this.handleDragOver} style={style}>
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