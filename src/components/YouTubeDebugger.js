// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {

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
        };
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleChangeBitrate}>bitrate</button>
                <button className='resolution' onClick={this.handleChangeResolution}>resolution</button>
            </div>
        )
    }

    handleChangeBitrate = () => {
        this.setState({
          settings: {
              // Important to spread the settings so that we don't lose any of them
            ...this.state.settings,
            bitrate: 12
          }
        });
      };
    
      handleChangeResolution = () => {
        this.setState({
          settings: {
            // Important to spread the settings so that we don't lose any of them
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
        });
    }

    componentDidUpdate = () => {
        console.log(this.state)
    }
}