// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
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

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log(this.state.settings.bitrate)

    }

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,

                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.bitrate)

    }


    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleChangeBitrate}>Bitrate Button</button>,
                <button className='resolution' onClick={this.handleChangeResolution}>Resolution Button</button>
            </div>
        )
    }
}
export default YouTubeDebugger;


