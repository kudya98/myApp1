import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import PostList from './components/PostList';
import './app.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <PostList />
  </Provider>,
  document.getElementById('root')
);
