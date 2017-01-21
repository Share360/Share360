import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class LoginPage extends Component {

    render() {
        console.log(this.props);
        return (
                <div className="container-fluid content login-wrapper">
                    <div className="login-container col-xs-6  col-sm-6  col-md-4  col-lg-4  vcenter">
                    <LoginForm dispatch={this.props.dispatch} />
                </div>
            </div>
        );
    }
}


function mapStateToProps( state ) {
    return {
        loginStatus: state.loginStatus
    }
}

export default connect(mapStateToProps)(LoginPage);
