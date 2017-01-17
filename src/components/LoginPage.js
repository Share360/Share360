import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { Link } from 'react-router';

class LoginPage extends Component {

    render() {
        return (
            <div className="container-fluid content login-wrapper">
                <div className="login-container col-xs-6  col-sm-6  col-md-4  col-lg-4  vcenter">
                    <LoginForm />
                </div>
            </div>
        );
    }
}


export default LoginPage;
