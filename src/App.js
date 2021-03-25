import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router, } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "office-ui-fabric-react";
import DragandDrop from "./components/DragandDrop";
import CountDownTimer from "./components/countdowntimer";
import "./App.css";

const AppWrapper = styled.div`
  width:100%;
  padding:32px;
  display:flex;
  justify-content:center;
`;
const Container = styled.div`
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          links: [
            {
              name: "Drag and drop",
              title: "Drag and drop",
              id: "id1",
              key: "key1",
              url: "/draganddrop"
            },
            {
              name: "CountDown Timer",
              title: "CountDown Timer",
              id: "id2",
              key: "key2",
              url: "/countdowntime"
            },
            {
              name: "Quiz App",
              title: "Quiz App",
              id: "id3",
              key: "key3",
              url: "/quizapp"
            }
          ]
        }
      ]
    }
  }


  render() {

    let { components } = this.state;
    return (
      <>
      <Nav groups={components} />
        <Router>
          <Switch>
            <Route exact path="/draganddrop" component={DragandDrop}/>
            <Route path="/countdowntime" component={CountDownTimer}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
