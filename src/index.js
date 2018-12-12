import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import store from './store/store'
import AuthorizedRoute from './authorizedRoute/authorizedRoute'
// import registerServiceWorker from './registerServiceWorker';

// Layouts
import PrimaryLayout from './components/layouts/PrimaryLayout'
import UnauthorizedLayout from './components/layouts/UnauthorizedLayout'

const App = props => (
	<Provider store={store}>
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={ UnauthorizedLayout }></Route>
					<AuthorizedRoute path="/index" component={ PrimaryLayout }></AuthorizedRoute>
					<Redirect to="/auth"/>
				</Switch>
			</div>
		</Router>
	</Provider>
)


ReactDOM.render(
	<App />,
	document.getElementById('root'));
// registerServiceWorker();
