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
		const { component: Component, pending, logged, ...rest} = this.props;
		const IF_Club_Token = sessionStorage.getItem("IF_Club_Token");//调试的时候为了方便如果有token直接进入，届时要删除
		return(
			<Route {...rest} render={props => {
				console.log('props', {...props})
				// return  <Component {...props}/> 
				return logged || IF_Club_Token ? <Component {...props}/> : <Redirect to="/auth/login" />
			}}></Route>
		)
	}
}

const stateToProps = ({loggedUserState}) => ({
	pending: loggedUserState.pending,
	logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)
