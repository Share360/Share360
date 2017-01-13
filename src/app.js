import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

class App extends React.Component {
	render() {
		return (
			<h1>Test</h1>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
