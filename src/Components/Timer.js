import React, { Component } from 'react';
import Modal from './Modal'

// ************** TIMER ***************
// Able to set a Pomodoro Timer 
// Customize Features including:
// - Number of Stages
// - Length of Work & Rest Stages 

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      started: false,
      minutes: 25,
      seconds: 0,
      numberOfStages: 3,
      workLength: 25,
      shortRest: 5,
      longRest: 15,
      stage: 1,
      restPeriod: false,
      roundsCompleted: 0,
      tmp: {
        numberOfStages: 3,
        workLength: 25,
        shortRest: 5,
        longRest: 15
      }
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
    //If reset the timer just reset current time 
    clearInterval(this.timer)
    this.setState(prevState => ({
      ...prevState,
      started: false,
      minutes: (prevState.restPeriod ? (prevState.stage <= prevState.numberOfStages ? prevState.shortRest : prevState.longRest) :
        prevState.workLength),
      seconds: 0
    }))
  }

  updateTime = () => {
    const { minutes, seconds, stage, numberOfStages, workLength, shortRest, longRest, restPeriod } = this.state
    if (minutes === 0 && seconds === 0) {
      if (stage < numberOfStages) {
        this.setState(prevState => ({
          ...prevState,
          minutes: (!restPeriod ? shortRest : workLength),
          stage: (restPeriod) ? stage + 1 : stage,
          restPeriod: !restPeriod
        }))
      } else if (stage === numberOfStages) {
        this.setState(prevState => ({
          ...prevState,
          restPeriod: true,
          minutes: longRest,
          stage: prevState.stage + 1
        }))
      } else {
        clearInterval(this.timer)
        this.setState(prevState => ({
          ...prevState,
          started: false,
          minutes: workLength,
          stage: 1,
          restPeriod: false
        }))
      }
    }
    else {
      this.setState(prevState => ({
        ...prevState,
        minutes: (seconds > 0) ? minutes : minutes - 1,
        seconds: (seconds > 0) ? seconds - 1 : 59
      }))
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState(prevState => ({ ...prevState, tmp: { ...prevState.tmp, [name]: value } }))
  }

  handleSubmit = () => {
    const { numberOfStages, workLength, shortRest, longRest } = this.state.tmp;
    //Check Values to ensure they are valid
    this.reset()
    this.setState(prevState => ({
      ...prevState, minutes: workLength,
      numberOfStages,
      workLength,
      shortRest,
      longRest
    }))
  }

  handleReset = () => {
    this.reset()
    this.setState({
      show: true,
      started: false,
      minutes: 25,
      seconds: 0,
      numberOfStages: 3,
      workLength: 25,
      shortRest: 5,
      longRest: 15,
      stage: 1,
      restPeriod: false,
      roundsCompleted: 0,
      tmp: {
        numberOfStages: 3,
        workLength: 25,
        shortRest: 5,
        longRest: 15
      }
    })
  }


  render() {
    const { minutes, seconds, started, stage, show, numberOfStages, tmp, restPeriod } = this.state
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
              <h2> <span>Stage:</span> {(restPeriod) ? "REST" : `${stage} of ${numberOfStages} (WORK)`}</h2>
            </div>
            <div id="time-header">
              <h2><span>Time:</span> {`${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`}</h2>
            </div>
          </div>

          <div className="gauges">
            <div className="gauge">
              <label>Stages: </label>
              <input type="number" name="numberOfStages"
                value={tmp.numberOfStages} onChange={this.handleChange} min={1} max={10} />
            </div>
            <br />
            <span id="title-time-modal">Time (in minutes)</span>
            <div className="gauge">
              <label>Work Length: </label>
              <input type="number" name="workLength"
                value={tmp.workLength} onChange={this.handleChange}
                min={1} max={60} />
            </div>
            <div className="gauge">
              <label>Short Break: </label>
              <input type="number" name="shortRest"
                value={tmp.shortRest} onChange={this.handleChange}
                min={1} max={60} />
            </div>
            <div className="gauge">
              <label>Long Break: </label>
              <input type="number" name="longRest"
                value={tmp.longRest} onChange={this.handleChange}
                min={1} max={60} />
            </div>
            <div className="modal-submit-buttons">
              <button className="apply-button" onClick={this.handleSubmit}>Apply</button>
              <button className="apply-button" onClick={this.handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </Modal>
    </>)
  }
}

export default Timer;