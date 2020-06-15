import React, { Component } from 'react';
import Timer from './Timer';

// The user can see the following data:
// 1) The current time left for the pomodoro stage
// 2) Number of Stage they are currently on
// 3) Indicating whether the it is a rest or working stage

//Future implementations:
// 1) Modify number of stages
// 2) Modify length of working and rest stages

export default class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: '25:00',
      breakLength: 15,
      stage: 0,
      numberOfStages: 0,
      started: false,
      stopped: false,
    }

  }
  render() {
    const { currentTime, stage } = this.state;
    return (
    )
  }
}