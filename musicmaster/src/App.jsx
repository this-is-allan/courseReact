import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'Frank Sinatra',
            artist: null,
            token: 'BQAxJjj_BzhTm1fuOQEp2J-QE5boQtx7YgFLQyLMCA7SeJosFyVKpL4QEukM3sk06IDloAua0JbJnqkHTNiMvMbOBVCzg79MpwZigkR2ieXj1to164Kij0TEcNfXysGLQtN5C61Qpuj9oFzlXymbuOWv_LYcFI87eni3EusemuX6cfvsL3FHY2Qf2RhTj9bDaiqGLbIB6rZY5W9Mx_e59cfaJKtcg_ryG2FD3-hsKcQBx9fkB1N5kES147-VwHeX08ZCq-PCV7gA'
        }
    }

    search() {
        let accessToken =  this.state.token;

        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log('FETCH_URL', FETCH_URL);

        fetch(FETCH_URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(response => response.json())
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