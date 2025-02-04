import React, { Component } from "react";
import styled from "styled-components";
import Draggable from "../Draggable";
import Droppable from "../Droppable";

const Wrapper = styled.div`
  width:100%;
  padding:32px;
  display:flex;
  justify-content:center;
`;

const Item = styled.div`
  padding:8px;
  color:#555;
  background-color:white;
  border-radius:3px;
`;

const droppableStyle = {
  backgroundColor: '#555',
  width: '250px',
  height: '400px',
  margin: '32px'
}

export default class DragandDrop extends Component {
  render() {
    return (
      <>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Drag and Drop </h1>
        <Wrapper>
          <Droppable id="dr1" style={droppableStyle}>
            <Draggable id="item1" style={{ margin: '8px' }}><Item>Text1</Item></Draggable>
            <Draggable id="item2" style={{ margin: '8px' }}><Item>Text2</Item></Draggable>
            <Draggable id="item3" style={{ margin: '8px' }}><Item>Text3</Item></Draggable>
            <Draggable id="item4" style={{ margin: '8px' }}><Item>Text4</Item></Draggable>
            <Draggable id="item5" style={{ margin: '8px', display: 'inline-grid' }}>
              <label>Test Label</label>
              <input type="text"></input>
            </Draggable>
          </Droppable>
          <Droppable id="dr2" style={droppableStyle}></Droppable>
        </Wrapper>
      </>
    );
  }

}