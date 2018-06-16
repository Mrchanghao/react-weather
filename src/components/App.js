import React, { Component } from 'react';
import CurrentWeather from './current_weather';
import Forecast from './forecast';
import GoogleMap from './google_map';
// scss
import '../styles/components/App.scss'

class App extends Component {
    
    state = {
        lat: 37.566535,
        lng: 126.977969
    }

    render() {
        return (
          <div id='app'>
              <div id='information'>
                <div id='current-weather'>
                    <CurrentWeather lat={this.state.lat} lng={this.state.lng}/>
                 </div>
                 <hr />
                <div id='forecast'>
                    <Forecast/>
                </div>
              </div>
              <div id='map'>
                <GoogleMap />
              </div>  
          </div>  
        );
    }
}

export default App;