import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'Frank Sinatra',
            tracks: [],
            artist: null,
            token: 'BQA4CNgxXS2YUeUjphQ1kQzxZbFhcFCXurzS_BLanIHXbSyeBNWxdvC370dztLFoxdlWCn7iLLEWIoXMLi2wPeYSB6_ufgrBl-PvXXbNWTGsGvqtNb5-ZmWjvoPfY_JMF64y4VswvzJRZrCC5Mu3_dgsJiKZV1pA9_6t58_zO5iHcY71fsssWX_cV11ocP7k9lgeETLfMRiz4fQODiyulXMxJ73o1mJX7B9L8vn1Ev_27DH47fLAEcDBZbhZdOM9aHTJdlcCxs9E'
        }
    }

    search() {
        let accessToken =  this.state.token;

        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
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

            let FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
            fetch(FETCH_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log('artist\'s top tracks:', json);
                const { tracks } = json;
                this.setState({tracks});
            })
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

                {
                    this.state.artist !== null
                    ?
                        <div>
                            <Profile
                                artist={this.state.artist}
                            />
                            <Gallery
                                tracks={this.state.tracks}
                            />
                        </div>
                    : <div></div>
                }
                
            </div>
        )
    }
}

export default App;