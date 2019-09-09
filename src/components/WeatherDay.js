import React, { Component } from 'react'

export class WeatherDay extends Component {
    render() {
        return (
            <div className="weatherDay">
                {this.props.temperature && <p>Temperature: {this.props.temperature} °F</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity} %</p>}
                {this.props.description && <p>Conditions:  {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}
export default WeatherDay;
