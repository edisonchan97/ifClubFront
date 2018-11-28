import React from 'react'
import { Button, Card, Row, Col, Input, Icon, notification, Form } from 'antd'
import { login } from '../../utils/xhr'
import './style.css'
import { getToken, jwtTest } from '../../api/api'
import { connect } from 'react-redux'

const FormItem = Form.Item;
const openNotification = (name) => {
	notification.open({
		message: name,
		description: 'Welcome to Intellifusion Club.',
		icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />,
	});
};
class NormalLoginForm extends React.Component {
	constructor(props) {  //构造函数
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}



	loginSubmit = async () => {
		
		let uname = this.state.username
		let upwd = this.state.password
		if(upwd === ""){
			this.setState({
				...this.validatePassword(upwd, true),
				password: '',
			})
			return
		}
		const res = await getToken({
			username: uname,
			password: upwd
		});
		if (res.code == 400) {//无此人
			//TODO
			this.setState({
				...this.validateUsername(uname, true),
				username: '',
				password: '',
			})
		} else if (res.code == 401) {//密码错误
			//TODO
			this.setState({
				...this.validatePassword(upwd, true),
				password: '',
			})
		} else if (res.code == 200) {
			sessionStorage.setItem("IF_Club_Token", res.data.token)
			login().then(() => {
				if (this.props.logged === true) {
					openNotification(this.state.username)
					this.props.history.push('/app')
				}
			});
		}
	}

	regSubmit = async () => {
		const res = await jwtTest({});
	}

	userChange = (e) => {
		this.setState({
			...this.validateUsername(e.target.value),
			username: e.target.value
		})
	}

	passwordChange = (e) => {
		this.setState({ 
			...this.validatePassword(e.target.value),
			password: e.target.value 
		})
	}


	validateUsername = (username, nouser) => {//还可以再添加操作来控制
		if (username === "") {
			return {
				usernameValidateStatus: 'error',
				errorMsg: "Please input your Username!",
			};
		} else if (nouser) {
			return {
				usernameValidateStatus: 'error',
				errorMsg: "This username doesn't register!",
			};
		} else {
			return {
				usernameValidateStatus: 'success',
				errorMsg: null,
			}
		}

	}

	validatePassword = (password, errorPwd) => {//还可以再添加操作来控制
		if (password === "") {
			return {
				passwordValidateStatus: 'error',
				passwordErrorMsg: "Please input your Password!",
			};
		} else if (errorPwd) {
			return {
				passwordValidateStatus: 'error',
				passwordErrorMsg: "Error Password",
			};
		} else {
			return {
				passwordValidateStatus: 'success',
				passwordErrorMsg: null,
			}
		}

	}

	render() {
		const user = this.state;
		return (
			<Row style={{ position: 'relative' }} type="flex" justify="center" align="middle">
				<Col xs={20} sm={20} md={6} lg={6} xl={6}>
					<Card title={<h4 style={{ textAlign: "center", color: '#1890ff' }}>Intellifusion-Club</h4>} bordered={true} style={{ marginTop: '50%', width: '100%', height: '300px', borderRadius: 5, boxShadow: ' 1px 2px 3px 3px #e4e4e4' }}>
						<Form  >
							<FormItem
								validateStatus={user.usernameValidateStatus}
								help={user.errorMsg}
							>
								<Input value={user.username} className='login_page_input' onChange={(e) => { this.userChange(e) }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="姓名拼音+工号" />
							</FormItem>
							<FormItem
								validateStatus={user.passwordValidateStatus}
								help={user.passwordErrorMsg}>
								<Input value={user.password} className='login_page_input' onChange={(e) => { this.passwordChange(e) }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
							</FormItem>
							<FormItem>
								<Button className='login_page_input' type="primary" block onClick={this.loginSubmit}>Login</Button>
							</FormItem>
							{/* <FormItem> */}
								{/* <Button className='login_page_input' type="info" block onClick={this.regSubmit}>Reg</Button> */}
							{/* </FormItem> */}
						</Form>
					</Card>
				</Col>
			</Row>

		)


		// return (
		//   <Form onSubmit={this.handleSubmit} className="login-form">
		// 	<FormItem>
		// 	  {getFieldDecorator('userName', {
		// 		rules: [{ required: true, message: 'Please input your username!' }],
		// 	  })(
		// 		<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
		// 	  )}
		// 	</FormItem>
		// 	<FormItem>
		// 	  {getFieldDecorator('password', {
		// 		rules: [{ required: true, message: 'Please input your Password!' }],
		// 	  })(
		// 		<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
		// 	  )}
		// 	</FormItem>
		// 	<FormItem>
		// 	  <a className="login-form-forgot" href="">Forgot password</a>
		// 	  <Button type="primary" htmlType="submit" className="login-form-button">
		// 		Log in
		// 	  </Button>
		// 	  Or <a href="">register now!</a>
		// 	</FormItem>
		//   </Form>
		// );
	}
}

const stateToProps = ({ loggedUserState }) => ({
	pending: loggedUserState.pending,
	logged: loggedUserState.logged
})

const LoginPage = Form.create()(NormalLoginForm);

export default connect(stateToProps)(LoginPage)
