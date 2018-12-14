import React from 'react'
import { Menu, Icon, Avatar } from 'antd';
import { changeIndexTab } from '../../utils/action'
import { connect } from 'react-redux'
import HomePageContent from './HomePageContent'
class AppHomePage extends React.Component {
	constructor(props) {  //构造函数
		super(props);
		this.state = {
		}
	}
	handleClick = (e) => {
		console.log('click ', e);
		changeIndexTab({
			currentTab: e.key
		})
	}
	// 我有想法想把这个做成活动的，点击某个 某个数组排到最前面去 其实用数组就可以实现 pop push
	render() {

		const { currentTab } = this.props.basicPageState
		console.log("currentTab", this.props);
		return (
			<>
				<Menu
					onClick={this.handleClick}
					selectedKeys={[currentTab]}
					mode="horizontal"
				>
					<Menu.Item key="html">
						<Avatar className={currentTab == "html" ? "avatar_title" : ""} >H</Avatar> HTML
        </Menu.Item>
					<Menu.Item key="css" >
						<Avatar className={currentTab == "css" ? "avatar_title" : ""} >C</Avatar> CSS
        </Menu.Item>
					<Menu.Item key="js">
						<Avatar className={currentTab == "js" ? "avatar_title" : ""} >J&E</Avatar> JS&ES6
        </Menu.Item>
					<Menu.Item key="react">
						<Avatar className={currentTab == "react" ? "avatar_title" : ""} >R</Avatar> React
        </Menu.Item>
					<Menu.Item key="NodeJs">
						<Avatar className={currentTab == "NodeJs" ? "avatar_title" : ""} >Node</Avatar> NodeJs
        </Menu.Item>
				</Menu>
				<HomePageContent />
				<style jsx="true">{
					`
				.avatar_title{
					color:#fff;
					background:#00A0E9;
				}
				`
				}
				</style>
			</>
		);
	}
}
const stateToProps = ({ basicPageState }) => ({
	basicPageState
})
export default connect(stateToProps)(AppHomePage) 
