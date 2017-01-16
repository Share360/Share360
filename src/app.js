import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import LandingPage from './components/LandingPage';
import Container from './components/Container/Container';

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={LandingPage} />
				</Route>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
