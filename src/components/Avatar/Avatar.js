import React, { Component } from 'react';
import './Avatar.css'

class Avatar extends Component {
  render() {
    return (
      <div className="circular right-margin">
        <a href="/" >
          <img src={this.props.image} alt="User"/>
        </a>
      </div>
    );
  }
}

export default Avatar;
