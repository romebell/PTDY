import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
    this.handleLike = this.handleLike.bind(this);
  }
  
  

  handleLike() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
  }

  render() {
    return (
      <div>
        <h3 className={this.state.isToggleOn ? 'like-btn': 'liked'}onClick={this.handleLike}>Like | {this.state.isToggleOn ? '100' : '101'}</h3>
      </div>
    )
  }
}

export default LikeButton;