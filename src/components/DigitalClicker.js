import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked : 0
        };
    }

    handleClick = () => {
        let numClicked = this.state.timesClicked
        this.setState({
            timesClicked : numClicked + 1
        })
    };
    
    render() {
        return (
            <div>
                {/* <p>Clicked {this.state.timesClicked} times</p> */}
                <button onClick = { this.handleClick }>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
