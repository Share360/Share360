import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Featured from './Featured';

class LandingPage extends React.Component {
	render() {
        const { loggedIn } = this.props.loginStatus;
		return (
			<div className="container-fluid content">
                {loggedIn ? <div> logged in</div> : <Featured />}
			</div>
		);
	}
}

function mapStateToProps(state){
    return {
        loginStatus: state.loginStatus
    };
}

export default connect(mapStateToProps)(LandingPage);