import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';

@connect(
  null,
  dispatch => bindActionCreators({
    fetchWeather
  })
)
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = ::this.onInputChange;
    this.onFormSubmit = ::this.onFormSubmit;
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchWeather: Actions.fetchWeather,
}, dispatch);