import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

//  ownProps are the props you want to pass to this componet -> this.props = ownProps
@connect(({ posts }, ownProps) => ({ post: posts[ownProps.match.params.id] }), dispatch => bindActionCreators({ fetchPost, deletePost }, dispatch))
export default class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.onDeleteClick = ::this.onDeleteClick;
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => { this.props.history.push('/') });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">&#60; Back to Posts</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}