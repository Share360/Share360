import React, { Component } from 'react';
import { Link } from 'react-router';

class LoginPage extends Component {

    render() {
        return (
            <div className="container-fluid content login-wrapper">
                    <div className="login-container col-xs-6  col-sm-6  col-md-4  col-lg-4  vcenter">
                        <form className="form-signin">
                            <h2 className="form-signin-heading ">Please login</h2>
                            <input type="text" className="form-control login-input" name="username" placeholder="user name" required="" />
                            <input type="password" className="form-control login-input" name="password" placeholder="password" required=""/>
                            <label className="checkbox login-checkbox">
                                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /><span>Remember Me</span>
                            </label>
                            <button className="btn btn-lg btn-custom btn-block" type="submit">Login</button>
                        </form>
                        <div className="login-create-account-link">
                            <p className="text-center "><a href="#" className="text-right">Don't have an account? Click here!</a></p>
                        </div>
                    </div>
            </div>
        );
    }
}


export default LoginPage;
