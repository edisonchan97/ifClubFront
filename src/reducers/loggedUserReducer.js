const GET_LOGGED_USER = 'GET_LOGGED_USER'
const SET_LOGGED_USER = 'SET_LOGGED_USER'
const initialState = {
	pending: true,
	logged: false
}

export function loggedUserReducer(state = initialState, action) {
	// debugger
	switch (action.type) {
		case GET_LOGGED_USER:
			return Object.assign({}, state, { pending: false})
		case SET_LOGGED_USER:
			return Object.assign({}, state, { pending:false, logged: action.logged})
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

