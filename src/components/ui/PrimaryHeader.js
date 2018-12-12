import React from 'react'
import { Icon, Row, Col, Popover, Button } from 'antd'
import { connect } from 'react-redux'
import { logout } from '../../utils/xhr'
class PrimaryHeader extends React.Component {

	logOut = () => {
		sessionStorage.removeItem("IF_Club_Token")
		logout()
	}
	render() {
		const popInfo = <div>
			<div><strong>Username:</strong>{this.props.username}</div>
			<Button type="danger" onClick={() => {this.logOut()}}>Log Out</Button>
		</div>
		return (
			<div>
				<Row style={{
					background: "#00A0E9",
					height: 40,
					borderRadius: "0 0 5px 5px"
				}}
					type="flex"
					align="middle"
				>
					<Col className="primary_header_username" xs={{ span: 8, offset: 15 }} lg={{ span: 2, offset: 22 }}>
						<Icon type="user" style={{ color: '#fff', marginRight: 10 }} />
						<Popover placement="bottomLeft" content={popInfo} trigger="click">
						<span >{this.props.username}</span>
						</Popover>
					</Col>
				</Row>
				{/* <nav>
					<NavLink to="/index" exact activeClassName="active">Home</NavLink>
					<NavLink to="/index/users" activeClassName="active">User</NavLink>
					<NavLink to="/index/products" activeClassName="active">Products</NavLink>
				</nav> */}
				<style jsx="true">
					{`
				.primary_header_username{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #fff;
				}
				
			`}
				</style>
			</div>
		)
	}

}

const stateToProps = ({ loggedUserState }) => ({
	username: loggedUserState.username
})
export default connect(stateToProps)(PrimaryHeader)
