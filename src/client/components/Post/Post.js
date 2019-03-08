import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFetchData } from '../../actions/post';
import './post.scss';

class Post extends Component {
  componentDidMount() {
    const id = window.location.pathname.split('/').pop() || window.location.pathname.split('/').pop();
    this.props.fetchData(`http://localhost:3000/api/posts/${id}`, {
      method: 'GET'
    });

  }

componentDidUpdate(){
    document.title = this.props.post.title;
}
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the posts</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div className="post">
          <title>{this.props.post.title}</title>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.text}</p>
        <em>{`Author: ${this.props.post.author}`}</em>
        <br/>
        <em>{`Date: ${this.props.post.date}`}</em>
      </div>
    );
  }
}

Post.propTypes = {
  fetchData: PropTypes.func.isRequired,
  post: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  hasErrored: state.postHasErrored,
  isLoading: state.postIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postFetchData(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
