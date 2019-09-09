import React, { Component } from 'react'


export class LocationSearch extends Component {
    render() {
        return (
            <form name="search "onSubmit = {this.props.loadWeather} >
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button>Get Weather</button>
                </form>
        )
    }
}
export default LocationSearch
