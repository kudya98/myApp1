
export function loggedIn(bool) {
  return {
    type: 'LOGGED_IN',
    loggedIn: bool
  };
}

export function userAuth(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => dispatch(loggedIn(response)))
      .catch(() => dispatch(loggedIn(false)));
  };
}
