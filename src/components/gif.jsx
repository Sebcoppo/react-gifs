import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return (
        <img src={src} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
