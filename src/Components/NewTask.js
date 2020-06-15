import React, { Component } from 'react';

export default class NewTask extends Component {

  render() {
    return (<div className="new-task-contains">
      <input type="text-area" placeholder="New Item"></input>
    </div>)
  }
}