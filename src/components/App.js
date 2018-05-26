import React, { Component } from 'react';
import CurrentWeather from './current_weather';
import Forecast from './forecast';
import GoogleMap from './google_map';

class App extends Component {
    
    render() {
        return (
          <div>
              <CurrentWeather/>
              <GoogleMap />
              <Forecast/>
          </div>  
        );
    }
}

export default App;