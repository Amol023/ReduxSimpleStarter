import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

@connect(
  ({ weather }) => ({ weather })
)
export default class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart chartData={temps} color="red" />
        </td>
        <td>
          <Chart chartData={pressures} color="green" />
        </td>
        <td>
          <Chart chartData={humidities} color="black"/>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}