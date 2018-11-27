import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import AppHomePage from '../../views/AppHomePage/AppHomePage'

// sub Layouts
import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

const PrimaryLayout = ({ match }) => (
	<div className="primary-layout">
		<PrimaryHeader/>
		<main>
			<Switch>
				<Route path={`${match.path}`} exact component={AppHomePage}></Route>
				<Route path={`${match.path}/users`} component={UserSubLayout}></Route>
				<Route path={`${match.path}/products`} exact component={ProductSubLayout}></Route>
				<Redirect to={`${match.url}`}/>
			</Switch>
		</main>
	</div>
)
export default PrimaryLayout
