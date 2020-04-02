// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()

      this.state ={
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
  // handleClick =(event)=> {
  //   if (event.target.className === 'bitrate'){
  //     this.setState({
  //       settings:{
  //         ...this.state.settings,
  //         bitrate: 12
  //       }
  //     });
  //   } else if (event.target.className === 'resolution') {
  //     this.setState({
  //       settings:{
  //         ...this.state.settings,
  //         video:{
  //           ...this.state.settings.video,
  //         resolution:'720'
  //       }
  //       }
  //     })
  //   };
  //
  // }
  handleChangeBitrate = () => {
   this.setState({
     settings: {
       ...this.state.settings,
       bitrate: 12
     }
   });
 };

 handleChangeResolution = () => {
   this.setState({
     settings: {
       ...this.state.settings,
       video: {
         ...this.state.settings.video,
         resolution: '720p'
       }
     }
   });
 }
  render(){
    return(
      <div>
      <button onClick={this.handleChangeBitrate}
        className='bitrate'>Bitrate Changer
      </button>

      <button onClick={this.handleChangeResolution}
        className='resolution'>Resolution Changer
       </button>
      </div>
    )
  }

}
