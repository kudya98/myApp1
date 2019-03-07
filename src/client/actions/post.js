export function postHasErrored(bool) {
  return {
    type: 'POST_HAS_ERRORED',
    hasErrored: bool
  };
}

export function postIsLoading(bool) {
  return {
    type: 'POST_IS_LOADING',
    isLoading: bool
  };
}

export function postFetchDataSuccess(post) {
  return {
    type: 'POST_FETCH_DATA_SUCCESS',
    post
  };
}

export function postFetchData(url) {
  return (dispatch) => {
    dispatch(postIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(postIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(post => dispatch(postFetchDataSuccess(post)))
      .catch(() => dispatch(postHasErrored(true)));
  };
}
