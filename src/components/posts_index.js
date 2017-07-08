import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPosts from '../actions/index';
import { map } from 'lodash';

@connect(({ posts }) => ({ posts }), dispatch => bindActionCreators({ fetchPosts }, dispatch))
export default class PostsIndex extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>
          Posts
        </h1>
        <h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </h3>
      </div>
    );
  }
}
