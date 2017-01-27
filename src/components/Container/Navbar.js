import React from 'react';
import { browserHistory, Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

import loginActions from '../../actions/loginActions';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
		};
	}

	componentWillMount() {
		this.props.dispatch(loginActions.checkLoginStatus());
	}

	handleSearchChange(e) {
		this.setState({
			searchText: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		window.location = '/#/search?search=' + this.state.searchText;
	}

	handleLogout() {
		this.props.dispatch(loginActions.logout());
	}

	renderNavItems() {
		if (this.props.loginStatus.loggedIn) {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
		            	<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">{this.props.loginStatus.username} <span className="caret"></span></a>
		            	<ul className="dropdown-menu">
		            		<li><Link to={"/profile/" + this.props.loginStatus.id}>Profile</Link></li>
		            		<li><Link className="clickable" onClick={this.handleLogout.bind(this)}>Log Out</Link></li>
		            	</ul>
		            </li>
				</ul>
			);
		}
		else {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li><IndexLink activeClassName="navlink-active" to="/login">Log In</IndexLink></li>
					<li><IndexLink activeClassName="navlink-active" to="/sign-up">Sign Up</IndexLink></li>
				</ul>
			);
		}
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-data">
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<IndexLink className="navbar-brand" to="/">Share360</IndexLink>
					</div>
					<div className="collapse navbar-collapse" id="navbar-data">
						{this.renderNavItems.bind(this)()}
						<form className="navbar-form navbar-right" style={{width: "60%"}} onSubmit={this.handleSubmit.bind(this)}>
							<div className="input-group" style={{width: "70%"}}>
								<input type="text" className="form-control" onChange={this.handleSearchChange.bind(this)} placeholder="Search" />
								<div className="input-group-btn">
									<button className="btn btn-default" type="submit">
										<i className="glyphicon glyphicon-search" />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state){
    return {
        loginStatus: state.loginStatus
    };
}

export default connect(mapStateToProps)(NavBar);
