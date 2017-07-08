import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPosts from '../actions/index';

@connect(({ posts }) => ({ posts }), dispatch => bindActionCreators({ fetchPosts }, dispatch))
export default class PostsIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts = [] } = this.props;

    return (
      <div>
        Hello World!
      </div>
    );
  }
}
