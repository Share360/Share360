import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			newSelect = false;
		}
	}

	newestIsSelected () {
		this.setState({
			this.newSelect = true
		})
		console.log(this.state.newSelect);
	}

	render() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
				<ul className="nav nav-sidebar">
					<li><Link activeClassName="active" to="/">Home</Link></li>
					{ this.props.loginStatus.loggedIn ? ( <li><Link activeClassName="active" to="/favorites">Favorites</Link></li> ) : null }
					{ this.props.loginStatus.loggedIn ? ( <li><Link activeClassName="active" to="/subscriptions">Subscriptions</Link></li> ) : null }
					<li onClick={this.state.newestIsSelected}><Link activeClassName="active" to="/newest">Newest</Link></li>
					<li><Link activeClassName="active" to="/most-popular">Most Popular</Link></li>
					<li><Link activeClassName="active" to="/music">Music</Link></li>
					<li><Link activeClassName="active" to="/sports">Sports</Link></li>
					<li><Link activeClassName="active" to="/gaming">Gaming</Link></li>
					<li><Link activeClassName="active" to="/entertainment">Entertainment</Link></li>
					<li><Link activeClassName="active" to="/news">News</Link></li>
					<li><Link activeClassName="active" to="/travel">Travel</Link></li>
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
