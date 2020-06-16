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
      stage: "",
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
    const { minutes, seconds, started, stage, show } = this.state
    // console.log(this.state)

    return (<>
      <div id="timer" onClick={() => this.setState(prevState => ({ ...prevState, show: !show }))}>
        {/* <h2>Stage: {stage}</h2> */}
        <h2>{`${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`}</h2>
        <svg style={{ "fill": (!started) ? "green" : "orange" }} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 128 128"><g><path d="M94.353,31.329l5.059-8.8a1.75,1.75,0,0,0-.645-2.389l-7.153-4.109a1.75,1.75,0,0,0-2.389.646l-5.051,8.791a50.663,50.663,0,0,0-14.3-3.814V16.305h3.55a1.75,1.75,0,0,0,1.75-1.75V6.307a1.749,1.749,0,0,0-1.75-1.75H54.576a1.749,1.749,0,0,0-1.75,1.75v8.248a1.75,1.75,0,0,0,1.75,1.75h3.55v5.344a50.663,50.663,0,0,0-14.3,3.814l-5.051-8.791a1.749,1.749,0,0,0-2.389-.646l-7.153,4.109a1.75,1.75,0,0,0-.645,2.389l5.059,8.805a51.071,51.071,0,1,0,60.706,0Zm-2.965-11.4L95.505,22.3l-4.048,7.046q-2-1.278-4.113-2.372ZM56.326,8.057H71.674v4.748H56.326Zm5.3,8.248h4.748v5.057C65.587,21.325,64.8,21.3,64,21.3s-1.587.024-2.374.061ZM32.495,22.3l4.117-2.365,4.044,7.039q-2.115,1.092-4.113,2.372ZM64,119.943a47.571,47.571,0,1,1,47.571-47.57A47.625,47.625,0,0,1,64,119.943Z" />
          <path d="M98.408,92.061A39.52,39.52,0,0,0,98.3,52.494a1.622,1.622,0,0,0-.08-.175,1.672,1.672,0,0,0-.1-.135A39.942,39.942,0,0,0,84.014,38.152a1.515,1.515,0,0,0-.15-.109,1.608,1.608,0,0,0-.175-.078,39.516,39.516,0,0,0-39.565.107,1.781,1.781,0,0,0-.178.082,1.617,1.617,0,0,0-.133.1A39.951,39.951,0,0,0,29.778,52.36a.946.946,0,0,0-.186.324A39.518,39.518,0,0,0,29.7,92.25a1.732,1.732,0,0,0,.08.176c.022.038.055.066.079.1a39.941,39.941,0,0,0,14.123,14.064,1.707,1.707,0,0,0,.153.111c.044.025.092.035.137.057a39.526,39.526,0,0,0,39.65-.113c.043-.021.089-.03.131-.055s.088-.065.133-.1A39.95,39.95,0,0,0,98.244,92.346c.027-.039.061-.068.085-.11A1.443,1.443,0,0,0,98.408,92.061ZM83.763,102.633,81.514,98.8a1.75,1.75,0,1,0-3.02,1.77l2.252,3.842a35.9,35.9,0,0,1-15,4.082v-4.465a1.75,1.75,0,0,0-3.5,0v4.465A35.891,35.891,0,0,1,47.432,104.5l2.23-3.853a1.75,1.75,0,0,0-3.029-1.753l-2.227,3.849A36.443,36.443,0,0,1,33.739,92.135l3.837-2.248a1.75,1.75,0,0,0-1.769-3.02l-3.842,2.252a35.9,35.9,0,0,1-4.083-15h4.465a1.75,1.75,0,0,0,0-3.5H27.882a35.9,35.9,0,0,1,3.991-14.818l3.854,2.229a1.75,1.75,0,0,0,1.752-3.029l-3.848-2.227A36.44,36.44,0,0,1,44.237,42.111l2.249,3.837a1.75,1.75,0,0,0,3.02-1.769l-2.252-3.842a35.882,35.882,0,0,1,15-4.082v4.464a1.75,1.75,0,0,0,3.5,0V36.255a35.9,35.9,0,0,1,14.818,3.99L78.338,44.1a1.75,1.75,0,1,0,3.029,1.753L83.594,42A36.443,36.443,0,0,1,94.261,52.61l-3.837,2.248a1.75,1.75,0,1,0,1.769,3.02l3.843-2.252a35.916,35.916,0,0,1,4.082,15H95.653a1.75,1.75,0,0,0,0,3.5h4.465A35.9,35.9,0,0,1,96.127,88.94l-3.853-2.23a1.75,1.75,0,0,0-1.753,3.03l3.848,2.227A36.437,36.437,0,0,1,83.763,102.633Z" />
          <path d="M90.394,72.373a1.75,1.75,0,0,0-1.75-1.75H71.794a8.013,8.013,0,0,0-6.044-6.045V47.729a1.75,1.75,0,0,0-3.5,0V64.578a7.991,7.991,0,1,0,9.544,9.545h16.85A1.751,1.751,0,0,0,90.394,72.373ZM64,76.866a4.494,4.494,0,1,1,4.493-4.493A4.5,4.5,0,0,1,64,76.866Z" /></g>
        </svg>
      </div>
      <Modal show={show} title={"Pomodoro Status"}
        close={() => this.setState(prevState => ({ ...prevState, show: !show }))}>
        <div id="pomodoro">
          <div className="gauges">
            <h2> Stage: {(stage > 5) ? "REST" : "WORK"} </h2>
            <h2>{`${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`}</h2>
          </div>
          {/* <div className="options-rounds">
            <h3><span>Rounds: </span>5 </h3>
            <h3><span>Work Time:</span> {25} min</h3>
            <h3><span>Rest Time: </span> {10} min</h3>
          </div> */}
          <div id="timer-buttons">
            <button style={{ "backgroundColor": (!started) ? "lightgreen" : "red" }}
              onClick={() => (!started) ? this.start() : this.stop()}>{!(started) ? "Start" : "Stop"}</button>
            <button onClick={() => this.reset()}>Reset</button>
          </div>
        </div>
      </Modal>
    </>)
  }
}

export default Timer;