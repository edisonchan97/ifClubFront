import React from 'react'
import { Icon, Row, Col, Popover, Button, Input } from 'antd'
import { connect } from 'react-redux'
import { logout } from '../../utils/action'
class PrimaryHeader extends React.Component {
	constructor(props) {  //构造函数
		super(props);
		this.state={
			offset:1
		}
	}
	logOut = () => {
		sessionStorage.removeItem("IF_Club_Token")
		logout()
	}
	FocusSearch = (p) => {
		this.setState(
			{
				offset:p
			}
		)
	}
	render() {
		const popInfo = <div>
			<div><strong>Username:</strong>{this.props.username}</div>
			<Button type="danger" onClick={() => { this.logOut() }}>Log Out</Button>
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
					<Col xs={{ span: 8, }} lg={{ span: 2, offset: 1 }} md={{ span: 4, offset: 2 }}>
						<h1 style={{
							lineHeight:"40px",
							display:"inline-block",
							height:40,
							padding:"5px 0 0 10px ",
							color:"#FFF",
							fontSize:20
						}}>IFFrontEnd</h1>
					</Col>
					<Col className="primary_header_username" xs={{ span: 8, }} md={{ span: 4, offset: 2 }}  lg={{ span: (6- (this.state.offset)), offset: this.state.offset }}>
						<Input
							placeholder="搜索"
							prefix={<Icon type="search" style={{ color: '#fff'
						 }} />}
						 className="search_input"
						 onFocus={
							 () =>{
								 this.FocusSearch(0)
							 }
						 }
						 onBlur={
							() =>{
								this.FocusSearch(1)
							}
						}
							// suffix={suffix}
							// value={userName}
							// onChange={this.onChangeUserName}
							// ref={node => this.userNameInput = node}
						/>
					</Col>
					<Col className="primary_header_username" xs={{ span: 8, }} lg={{ span: 3, offset: 11}} md={{ span: 4, offset: 8 }}>
						<Icon type="user" style={{ color: '#fff', marginRight: 10 }} />
						<Popover placement="bottomRight" content={popInfo} trigger="click">
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
					transition: 0.5s ease-in;
				}
				.search_input{
				}
				.search_input input{
						background: #00A0E9;
						color:#fff;
						border:none;	
				}
				.search_input input::-webkit-input-placeholder { /* WebKit browsers */
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
