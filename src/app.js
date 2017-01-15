import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import Profile from './components/Profile';

//created the store so that I can access fake data for profile template.
const store = createStore(allReducers);

class App extends React.Component {
	render() {
		return (
		    <div>
                <h1>Test</h1>
                <Profile />
            </div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
