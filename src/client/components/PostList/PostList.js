import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postListFetchData } from '../../actions/postList';
import PostPreview from '../PostPreview/PostPreview';
import './postList.scss';

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
        {this.props.postList.map(post => (
          <PostPreview key={post.id} id={post.id} title={post.title} visitors={post.visitors} />
        ))}
      </ul>
    );
  }
}

PostList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  postList: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  postList: state.postList,
  hasErrored: state.postListHasErrored,
  isLoading: state.postListIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postListFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
