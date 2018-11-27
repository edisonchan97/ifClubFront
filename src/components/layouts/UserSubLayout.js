import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserNav from '../ui/UserNav'

//// Sub Layouts
import BrowseUsersPage from '../../views/BrowseUsersPage/BrowseUsersPage'
import AddUserPage from '../../views/AddUserPage/AddUserPage'
import UserProfilePage from '../../views/UserProfilePage/UserProfilePage'

const UserSubLayout = ({ match }) => (
	<div className="user-sub-layout">
		<aside>
			<UserNav />
		</aside>
		<div className="primary-content">
			<Switch>
				<Route path={match.path} exact component={BrowseUsersPage} />
				<Route path={`${match.path}/add`} exact component={AddUserPage} />
				<Route path={`${match.path}/:userId`}  component={UserProfilePage} />
			</Switch>
		</div>
	</div>
)

export default UserSubLayout
