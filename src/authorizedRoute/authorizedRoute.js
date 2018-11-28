import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedUser } from '../utils/xhr'

class AuthorizedRoute extends React.Component{
	componentWillMount() {
		getLoggedUser()
	}

	render() {
		console.log(this.props)
		const { component: Component, pending, logged, ...rest} = this.props
		console.log('go', this.props.Component)
		return(
			<Route {...rest} render={props => {
				console.log('props', {...props})
				return logged ? <Component {...props}/> : <Redirect to="/auth/login" />
			}}></Route>
		)
	}
}

const stateToProps = ({loggedUserState}) => ({
	pending: loggedUserState.pending,
	logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)
