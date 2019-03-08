import React from 'react';
import PropTypes from 'prop-types';
import './postPreview.scss';
import { withRouter } from 'react-router-dom';

const PostPreview = withRouter(props => (
  <li
    className="post-preview"
    onClick={() => {
      props.history.push({
        pathname: `/posts/${props.id}`,
          id: props.id
      });
    }}
  >
    <div className="title">{props.title}</div>
    <div className="visitors">{`👁 ${props.visitors}`}</div>
  </li>
));
PostPreview.propTypes = {
  id: PropTypes.string.isRequired,
  visitors: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired

};
export default withRouter(PostPreview);
