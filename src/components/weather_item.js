import React from 'react'
import  '../styles/components/weather_item.scss'

const WeatherItem = (props) => {
    return (
        <li className='item'>
            <div className='weekday'>{props.week}</div>
            <div className='icon'>
                <img src={props.icon} />
            </div>
            <div className='temperature'>30</div>
        </li>
    )
}

export default WeatherItem