import React from 'react'
import { Menu, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'

class HomePageContent extends React.Component {
	constructor(props) {  //构造函数
		super(props);
		this.state = {
		}
	}
    componentWillMount =() => {
        
    }
	render() {
		return (
			<>
				
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
export default connect(stateToProps)(HomePageContent) 
