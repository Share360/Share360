import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import allReducers from './reducers/index';
import Profile from './components/Profile';
import Categories from './components/Categories'
import LandingPage from './components/LandingPage';
import Container from './components/Container/Container';
import Featured from './components/Featured';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import VideoPage from './components/VideoPage';

//created the store so that I can access fake data for profile template.
const store = createStore(allReducers);

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={LandingPage} />
					<Route path="/categories" component={Categories} />
					<Route path='/featured' component={Featured} />
                    <Route path='/profile' component={Profile} />
					<Route path="/login" component={LoginPage} />
					<Route path="/sign-up" component={SignUp} />
					<Route path='/profile' component={Profile} />
					<Route path='/video/:id' component={VideoPage} />
				</Route>
			</Router>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
