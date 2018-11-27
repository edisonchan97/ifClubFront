import React from 'react'
import { Button, Card, Row, Col, Input, Icon } from 'antd'
import { login } from '../../utils/xhr'
import './style.css'

class LoginPage extends React.Component {

	handleClick = () => {
		login().then(() => {
			this.props.history.push('/app')
		})
	}
	render() {
		return (
			<Row style={{ position: 'relative' }} type="flex" justify="center" align="middle">
				<Col xs={20} sm={20} md={6} lg={6} xl={6}>
					<Card title={<h4 style={{ textAlign: "center", color: '#1890ff' }}>Intellifusion-Club</h4>} bordered={true} style={{ marginTop: '50%', width: '100%', height: '300px', boxShadow: ' 2px 2px 3px #e4e4e4' }}>
						<Input className='login_page_input' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						<Input className='login_page_input' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						<Button className='login_page_input' type="primary" block onClick={this.handleClick}>Login</Button>
					</Card>
				</Col>
			</Row>

		)
	}
}


export default LoginPage
