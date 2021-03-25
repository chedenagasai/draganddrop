import React, { Component } from "react";

export default class CountDownTimer extends Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      seconds: 0,
    }
  }
  componentDidMount = () => {
    this.timecalculate()
  }

  componentDidUpdate = () => {
    setInterval(() => {
      this.timecalculate()
    }, 1000);
  }
  timecalculate = () => {

    let newYearDate = new Date("1 Jan 2021");
    let currentDate = new Date();
    let totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    this.setState({ days: days, hours: hours, mins: mins, seconds: seconds })
  }

  render() {
    const { days, hours, mins, seconds } = this.state;
    return (
      <>

        <div className="countdown-container">
        <h1>New Year Eve</h1>
          <p>{days}</p>
          <p>Days</p>
          <p>{hours}</p>
          <p>Hours</p>
          <p>{mins}</p>
          <p>Minutes</p>
          <p>{seconds}</p>
          <p>Seconds</p>
        </div>

      </>
    );
  }
}