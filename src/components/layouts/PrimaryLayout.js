import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Row, Col } from 'antd'
import PrimaryHeader from '../ui/PrimaryHeader'
import PrimaryFooter from '../ui/PrimaryFooter'
import AppHomePage from '../../views/AppHomePage/AppHomePage'
import PrimaryList from '../ui/PrimaryList'

import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

class PrimaryLayout extends React.Component {
	constructor(props) {  //构造函数
		super(props);
	}


	render() {
		console.log(this.props)
		const listData = [
			{
				name: "淘宝FED",
				url: "http://taobaofed.org"
			}
		]
		return (
			<div className="primary-layout">
				<PrimaryHeader />
				<Row>
					<Col xs={{ span: 24, offset: 0 }} lg={{ span: 16, offset: 2 }} md={{ span: 14, offset: 2 }} style={{
						height:500,
						background:"#6e6e6e",
						marginTop:20,
						// padding:10
					}}>
						<main>
							<Switch>
								<Route path={`${this.props.match.path}`} exact component={AppHomePage}></Route>
								<Route path={`${this.props.match.path}/users`} component={UserSubLayout}></Route>
								<Route path={`${this.props.match.path}/products`} exact component={ProductSubLayout}></Route>
								<Redirect to={`${this.props.match.url}`} />
							</Switch>
						</main>
					</Col>

					<Col xs={{ span: 24, offset: 0 }} lg={{ span: 4, offset: 1 }} md={{ span: 7, offset: 1 }} >
						<PrimaryList listData={listData} listTitle="友情链接" />
					</Col>

				</Row>
				<PrimaryFooter />
			</div>
		)
	}
}
export default PrimaryLayout
