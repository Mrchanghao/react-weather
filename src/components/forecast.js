import React, { Component } from 'react';
import '../styles/components/forecast.scss';
import WeatherItem from './weather_item';
import axios from 'axios';
import {config} from '../config/config'
class Forecast extends Component {
    
    state = {
        weather: [
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'},
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'},
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'},
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'},
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'},
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'},
            {week: 'Sun', image: 'http://openweathermap.org/img/w/10d.png'}
        ]
    }
    render() {
        return (
            <div>
                <ul className='forecasts'>
                    {this.state.weather.map((data, i) => {
                        return (
                            <WeatherItem key={i} week={data.week} icon={data.image} />
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Forecast;