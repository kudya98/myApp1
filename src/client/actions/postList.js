export function postListHasErrored(bool) {
  return {
    type: 'POST_LIST_HAS_ERRORED',
    hasErrored: bool
  };
}

export function postListIsLoading(bool) {
  return {
    type: 'POST_LIST_IS_LOADING',
    isLoading: bool
  };
}

export function postListFetchDataSuccess(postList) {
  return {
    type: 'POST_LIST_FETCH_DATA_SUCCESS',
      postList
  };
}

export function postListFetchData(url) {
  return (dispatch) => {
    dispatch(postListIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(postListIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(postList => dispatch(postListFetchDataSuccess(postList)))
      .catch(() => dispatch(postListHasErrored(true)));
  };
}
