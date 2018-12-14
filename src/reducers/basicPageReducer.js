const CHANGE_INDEX_TAB = 'CHANGE_INDEX_TAB'
const GET_PAGE_CONTENT = 'GET_PAGE_CONTENT'
const initialState = {
	currentTab: "html",
	page: 1
}

export function basicPageReducer(state = initialState, action) {
	// debugger
	switch (action.type) {
		case CHANGE_INDEX_TAB:
			return Object.assign({}, state,{currentTab:action.currentTab})
		case GET_PAGE_CONTENT:
			return Object.assign({}, state,{page:action.page})
		default:
			return state
	}
}

export default basicPageReducer