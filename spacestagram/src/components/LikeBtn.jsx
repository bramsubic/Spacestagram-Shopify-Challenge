import React from 'react';

export default class LikeButton extends React.Component {
    state = {
      liked: false
    };

  handleClick = (evt) => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render(){
    const status = this.state.liked ? '\u2665' : '\u2661'
    return(
    <div><button onClick={this.handleClick}>{status}</button></div>
  )
  }
}