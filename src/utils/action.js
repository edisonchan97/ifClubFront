import store from '../store/store'

export const getLoggedUser = () => {
	setTimeout(() => {
		store.dispatch({
			type: 'GET_LOGGED_USER'
		})
	}, 500)
}

export const login = (username) => {
	return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
			store.dispatch({
				type: 'SET_LOGGED_USER',
				logged: true,
				username: username
			})
			resolve();
		// }, 500)
	})
}

export const logout = () => {
	return new Promise((resolve, reject) => {
			store.dispatch({
				type: 'SET_LOGGED_USER',
				logged: false
			})
			resolve()
	})
}

export const changeIndexTab = (param) => {
	return new Promise((resolve, reject) => {
			store.dispatch({
				type: 'CHANGE_INDEX_TAB',
				...param
			})
			resolve()
	})
}
