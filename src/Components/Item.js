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
  myInput = React.createRef();


  handleStatusChange = () => {
    this.setState(prev => ({ ...prev, completed: !prev.completed }))
    this.props.changeStatus()
  }


  handleEdit = (event) => {
    const value = event.target.value
    this.setState(prev => ({ ...prev, title: value }))
  }

  render() {
    // console.log(this.myInput)
    const { completed, title, showDelete } = this.state
    return (
      <div className="item-contains"
        onMouseEnter={() => this.setState(prevState => ({ ...prevState, showDelete: true }))}
        onMouseLeave={() => this.setState(prevState => ({ ...prevState, showDelete: false }))}>
        <div className="item-content">
          <div className="item-title">
            <input type="checkbox"
              checked={completed}
              onChange={this.handleStatusChange} />
            <input
              className="list-text-field"
              onChange={this.handleEdit}
              onBlur={() => {
                //Check if value is empty 
                this.setState(prev => ({ ...prev, editable: false }))
                if (title.length === 0) this.props.delete()
                else this.props.changeTitle(title)
              }}
              value={title} />
          </div>
          {showDelete && <span className="delete-item" onClick={(this.props.delete)}>X</span>}
        </div>
      </div >
    )
  }
}