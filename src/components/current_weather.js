import React, { Component } from 'react';
import '../styles/components/current_weather.scss'



class CurrentWeather extends Component {
   
    render() {
        return (
            <div className='current-weather'>
                <div className='location'>Seoul</div>
                <div className='weather'>Sunny</div>
                <div className='temperature'>30°C</div>
            </div>
        );
    }
}

export default CurrentWeather;