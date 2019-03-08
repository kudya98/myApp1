export function loggedIn(state = false, action) {
    switch (action.type) {
        case 'LOGGED_IN':
            return action.loggedIn;

        default:
            return state;
    }
}
