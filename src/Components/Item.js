import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.item.completed,
      title: props.item.title
    }
  }

  handleChange = () => {
    this.setState(prev => ({ ...prev, completed: !prev.completed }))
    this.props.changeStatus()
  }

  render() {
    return (
      <div className="item-contains">
        <input type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange} />
        <h3 onClick={() => this.props.showDetails(this.props.item)}>{this.state.title}</h3>
      </div>
    )
  }
}