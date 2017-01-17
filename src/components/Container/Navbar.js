import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
		};
	}

	handleSearchChange(e) {
		this.setState({
			searchText: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		window.location = "#";
	}

	renderNavItems() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li><IndexLink activeClassName="navlink-active" to="/login">Log In</IndexLink></li>
				<li><IndexLink activeClassName="navlink-active" to="/sign-up">Sign Up</IndexLink></li>
			</ul>
		);
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
						<form className="navbar-form navbar-right" onSubmit={this.handleSubmit.bind(this)}>
							<div className="input-group">
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
