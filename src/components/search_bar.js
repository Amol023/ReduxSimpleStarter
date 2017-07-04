import React, { Component } from 'react';

//This is a controlled component - where the state changes the element (instead of the other way around)
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }


};

export default SearchBar;
