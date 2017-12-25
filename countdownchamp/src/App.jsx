import React, { Component } from 'react'
import './App.css'
import Clock from './Clock';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 26, 2017'
        }
    }

    changeDeadLine() {
        console.log('state', this.state);
        this.setState({deadline: this.state.newDeadLine})
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>

                <Clock
                    deadline={this.state.deadline}
                />

                <div>
                    <input
                        placeholder='new date'
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadLine()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App