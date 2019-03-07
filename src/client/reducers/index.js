import { combineReducers } from 'redux';
import { postList, postListHasErrored, postListIsLoading } from './postList';

export default combineReducers({
  postList,
  postListHasErrored,
  postListIsLoading
});
