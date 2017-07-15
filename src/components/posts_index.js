import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

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
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new" >
            Create New
          </Link>
        </div>
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
