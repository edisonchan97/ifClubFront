import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import PrimaryFooter from '../ui/PrimaryFooter'
import AppHomePage from '../../views/AppHomePage/AppHomePage'


import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

class PrimaryLayout extends React.Component {
	constructor(props) {  //构造函数
		super(props);
	}


	render() {
		console.log(this.props)
		return (
			<div className="primary-layout">
				<PrimaryHeader />
				<main>
					<Switch>
						<Route path={`${this.props.match.path}`} exact component={AppHomePage}></Route>
						<Route path={`${this.props.match.path}/users`} component={UserSubLayout}></Route>
						<Route path={`${this.props.match.path}/products`} exact component={ProductSubLayout}></Route>
						<Redirect to={`${this.props.match.url}`} />
					</Switch>
				</main>
				<PrimaryFooter />
			</div>
		)
	}
}
export default PrimaryLayout
