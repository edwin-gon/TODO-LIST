import React, { Component } from 'react';
import Modal from './Modal'

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      started: false,
      minutes: 25,
      seconds: 0,
      numWorkStages: 3,
      lengthWork: 25,
      lengthRest: 5,
      stage: 1,
      roundsCompleted: 0,
    }

  }

  start = () => {
    this.setState(prevState => ({ ...prevState, started: true }))
    this.timer = setInterval(() => this.updateTime(), 1000)
  }

  stop = () => {
    this.setState(prevState => ({ ...prevState, started: false }))
    clearInterval(this.timer)

  }

  reset = () => {
    clearInterval(this.timer)
    this.setState(prevState => ({
      started: false,
      minutes: 25,
      seconds: 0
    }))
  }

  updateTime = () => {

    const { minutes, seconds } = this.state

    if (minutes === 0 && seconds === 0) {
      clearInterval()
    }
    else {
      this.setState(prevState => ({
        ...prevState,
        minutes: (seconds > 0) ? minutes : minutes - 1,
        seconds: (seconds > 0) ? seconds - 1 : 59
      }))
    }
  }


  render() {
    const { minutes, seconds, started, stage, show, numWorkStages } = this.state
    // console.log(this.state)

    return (<>
      <div id="timer">
        <h2>{`${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`}</h2>

        {(!started) ? <div className="play-button" onClick={() => this.start()}></div> :
          <div className="stop-button" onClick={() => this.stop()}></div>}

        <div onClick={() => this.reset()} className="reset-button">
          <div className="arrow"></div>
        </div>
        <div onClick={() => this.setState(prevState => ({ ...prevState, show: !show }))} className="clock">
          <div className="tomato-top"></div>
          <div className="tomato-top-left"></div>
          <div className="tomato-top-right"></div>
          <div className="clock-border">
            <div className="clock-center"></div>
            <div className="clock-hour"></div>
            <div className="clock-minute"></div>
          </div>
        </div>
      </div>
      <Modal show={show}
        title={"Pomodoro Status"}
        close={() => this.setState(prevState => ({ ...prevState, show: !show }))}>
        <div id="pomodoro">
          <div id="pomodoro-header">
            <div id="stage-header">
              <h4> Stage: {(stage === numWorkStages) ? "REST" : "WORK"} </h4>
              <p>{stage} of {numWorkStages}</p>
            </div>
            <div id="time-header">
              <h4>Time: {`${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`}</h4>


              {/* 
             */}
            </div>
          </div>
          {/* <div className="options-rounds">
            <h3><span>Rounds: </span>5 </h3>
            <h3><span>Work Time:</span> {25} min</h3>
            <h3><span>Rest Time: </span> {10} min</h3>
          </div> */}

          {/* <div className="gauges">
            <div className="gauge">
              <label>Rounds:</label>
              <input type="number" />
            </div>
            <div className="gauge">
              <label>Stages: </label>
              <input type="number" />
            </div>
            <div className="gauge">
              <label>Work Period: </label>
              <input type="number" />
            </div>
          </div> */}
        </div>
      </Modal>
    </>)
  }
}

export default Timer;