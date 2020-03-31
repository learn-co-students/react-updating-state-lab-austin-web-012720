import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button class='bitrate' onClick={this.handleBitClick}>
          Debug Bitrate: {this.state.settings.bitrate}
        </button>
        <button class='resolution' onClick={this.handleResClick}>
          resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}
