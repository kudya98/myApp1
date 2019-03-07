import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/postList';
import PostPreview from './PostPreview';
import './postList.scss';

class Post extends Component {
  componentDidMount() {
  }


  render() {
    return (
      <button>rfwqr</button>
    );
  }
}

export default withRouter(Post);
