import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.item.completed,
      title: props.item.title,
      showDelete: false
    }
  }

  handleChange = () => {
    this.setState(prev => ({ ...prev, completed: !prev.completed }))
    this.props.changeStatus()
  }

  render() {
    return (
      <div className="item-contains"
        onMouseEnter={() => this.setState(prevState => ({ ...prevState, showDelete: true }))}
        onMouseLeave={() => this.setState(prevState => ({ ...prevState, showDelete: false }))}>
        <div className="item-content">
          <input type="checkbox"
            checked={this.state.completed}
            onChange={this.handleChange} />
          <h3 onDoubleClick={() => this.props.showDetails(this.props.item)}>{this.state.title}</h3>
        </div>
        {this.state.showDelete && <h3 className="delete-item" onClick={(this.props.delete)}>X</h3>}
      </div>
    )
  }
}