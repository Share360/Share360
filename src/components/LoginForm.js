import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import loginActions from '../actions/loginActions';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [ e.target.name ] : e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.dispatch( loginActions.login ( this.state.username.toLowerCase(), this.state.password))
    }

    render(){
        return (

                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <h2 className="form-signin-heading ">Log In</h2>
                        <div className="form-group">
                            <input
                                onChange={this.onChange}
                                type="text"
                                className="form-control login-input"
                                name="username"
                                placeholder="user name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                onChange={this.onChange}
                                type="password"
                                className="form-control login-input"
                                name="password"
                                placeholder="password"
                                required
                            />
                        </div>

                        <label className="checkbox login-checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /><span>Remember Me</span>
                        </label>

                        <button className="btn btn-lg btn-custom btn-block" type="submit" disabled={this.state.isLoading}>Login</button>

                        <div className="login-create-account-link">
                            <IndexLink activeClassName="navlink-active" to="/sign-up">Don't have an account? Click here to sign up!</IndexLink>
                        </div>
                    </form>

        )
    }
}


export default LoginForm;

