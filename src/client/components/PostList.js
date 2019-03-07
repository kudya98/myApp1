import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/posts';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/posts', {
      method: 'GET'
    });
  }


  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the posts</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul className="post-list">
        {this.props.posts.map(post => (
          <Post id={post.id} title={post.title} />
        ))}
      </ul>
    );
  }
}

PostList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
  hasErrored: state.postsHasErrored,
  isLoading: state.postsIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
