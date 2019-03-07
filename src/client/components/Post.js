import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <li key={props.id} className="post">
    {props.title}
  </li>
);
Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default Post;
