import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
				<ul className="nav nav-sidebar">
					<li><Link activeClassName="active" to="/">Home</Link></li>
					{ this.props.loginStatus.loggedIn ? ( <li><Link activeClassName="active" to="/favorites">Favorites</Link></li> ) : null }
					{ this.props.loginStatus.loggedIn ? ( <li><Link activeClassName="active" to="/subscriptions">Subscriptions</Link></li> ) : null }
					<li><Link activeClassName="active" to="/">Newest</Link></li>
					<li><Link activeClassName="active" to="/">Most Popular</Link></li>
					<li><Link activeClassName="active" to="/">Music</Link></li>
					<li><Link activeClassName="active" to="/">Sports</Link></li>
					<li><Link activeClassName="active" to="/">Gaming</Link></li>
					<li><Link activeClassName="active" to="/">Entertainment</Link></li>
					<li><Link activeClassName="active" to="/">News</Link></li>
					<li><Link activeClassName="active" to="/">Travel</Link></li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
    return {
        loginStatus: state.loginStatus
    };
}

export default connect(mapStateToProps)(Sidebar);