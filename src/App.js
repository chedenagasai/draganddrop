import React, { Component } from "react";
import styled from "styled-components";
import DragandDrop from "./components/DragandDrop";

const AppWrapper = styled.div`
  width:100%;
  padding:32px;
  display:flex;
  justify-content:center;
`;
const Container = styled.div`
`;
class App extends Component {

  render() {
    return (
      <AppWrapper>
        <Container>
          <DragandDrop />
        </Container>
      </AppWrapper>
    );
  }
}

export default App;
