import React, { Component } from 'react';
import '../styles/components/forecast.scss';


class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='forecast'>
                Forecast
            </div>
        );
    }
}

export default Forecast;