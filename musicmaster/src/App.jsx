import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'Frank Sinatra',
            artist: null
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log('FETCH_URL', FETCH_URL);
        fetch(FETCH_URL, {
            method: 'GET',
            headers: {
                'Authorization': '4b8866c3f7344d13b98f23649b509a6d'
            }
        })
        .then(response => console.log('response', response))
        .then(json => {
            const artist = json.artists.items[0];
            console.log('artist', artist);
            this.setState({artist});
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master from App</div>

                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a Artist"
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <Profile
                    artist={this.state.artist}
                />
                
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;