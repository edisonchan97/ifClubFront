import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import { loggedUserReducer } from '../reducers/loggedUserReducer'
import loggedUserReducer from '../reducers/loggedUserReducer'
import basicPageReducer from '../reducers/basicPageReducer'
const reducers = combineReducers({
	loggedUserState:loggedUserReducer,
	basicPageState:basicPageReducer
})
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
	applyMiddleware(thunk,logger),
	reduxDevtools
))
export default store
