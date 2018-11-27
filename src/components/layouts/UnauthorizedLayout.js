import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from '../../views/LoginPage/LoginPage'

const UnauthorizedLayout = () => (
	<div>
		<Switch>
			<Route path="/auth/login" component={LoginPage}></Route>
			<Redirect to="/auth/login"/>
		</Switch>
	</div>
)
export default UnauthorizedLayout
