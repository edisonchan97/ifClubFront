const CHANGE_INDEX_TAB = 'CHANGE_INDEX_TAB'
const initialState = {
	currentTab: "html",
}

export function basicPageReducer(state = initialState, action) {
	// debugger
	switch (action.type) {
		case CHANGE_INDEX_TAB:
			return Object.assign({}, state,{currentTab:action.currentTab})
		default:
			return state
	}
}

export default basicPageReducer