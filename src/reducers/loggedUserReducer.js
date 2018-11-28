const GET_LOGGED_USER = 'GET_LOGGED_USER'
const SET_LOGGED_USER = 'SET_LOGGED_USER'
const SET_LOGGED_TOKEN = 'SET_LOGGED_TOKEN'
const initialState = {
	logged: false,
	token: ""
}

export function loggedUserReducer(state = initialState, action) {
	// debugger
	switch (action.type) {
		case GET_LOGGED_USER:
			return Object.assign({}, state)
		case SET_LOGGED_USER:
			return Object.assign({}, state, { logged: action.logged })
		default:
			return state
	}
}

export default loggedUserReducer

// export function getLoggedUser() {
// 	return { type: GET_LOGGED_USER }
// }
//
// export function setLoggedUser() {
// 	return { type : SET_LOGGED_USER }
// }

