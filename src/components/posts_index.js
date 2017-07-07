import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPosts from '../actions/index';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
    // this.fetchPosts
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts = [] } = this.props;

    return (
      <div>
        {Object.values(posts).map((post, index) =>
          <div>index</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ posts }) { return { posts } };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);