import React, { Component } from 'react';
import '../styles/components/current_weather.scss'
import axios from 'axios';
import {config} from '../config/config';


class CurrentWeather extends Component {
   
    state = {
        location: '',
        weather: '',
        temperature: 0
    }

    componentDidMount() {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lng}&APPID=${config.weather}`;

        axios.get(url)
        .then((res) => {
            console.log(res)
            let data = res.data;
            this.setState({
                location: res.data.name,
                weather: data.weather[0].main,
                temperature: (data.main.temp - 273.15).toFixed(0)
            })

        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='current-weather'>
                <div className='location'>{this.state.location}</div>
                <div className='weather'>{this.state.weather}</div>
                <div className='temperature'>{this.state.temperature}°C</div>
            </div>
        );
    }
}

export default CurrentWeather;