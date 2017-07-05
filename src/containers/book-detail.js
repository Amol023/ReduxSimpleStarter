import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div>Select a book to get started.</div>
      )
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.activeBook.title}</div>
        <div>Pages: {this.props.activeBook.pages}</div>
      </div>
    )
  }
}

function mapStateToProps({ activeBook }) {
  return {
    activeBook,
  }
}

export default connect(mapStateToProps)(BookDetail);