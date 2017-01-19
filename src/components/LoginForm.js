import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

import validateInput from '../../server/validations/login'

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

    isValid() {
        const {errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.state({ errors })
        }
        return isValid;
    }


    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios.post('/api', { user: this.state})
        if(this.isValid()){
        }
    }

    render(){
        return (

                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <h2 className="form-signin-heading ">Please login</h2>
                        <div className="form-group">
                            <input
                                value={this.state.username}
                                onChange={this.onChange}
                                type="text"
                                className="form-control login-input"
                                name="username"
                                placeholder="user name"
                                required=""
                            />
                        </div>

                        <div className="form-group">
                            <input
                                value={this.state.password}
                                onChange={this.onChange}
                                type="password"
                                className="form-control login-input"
                                name="password"
                                placeholder="password"
                                required=""
                            />
                        </div>

                        <label className="checkbox login-checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /><span>Remember Me</span>
                        </label>

                        <button className="btn btn-lg btn-custom btn-block" type="submit">Login</button>

                        <div className="login-create-account-link">
                            <IndexLink activeClassName="navlink-active" to="/sign-up">Dont have an account? Click here to sign up!</IndexLink>
                        </div>
                    </form>

        )
    }
}

export default LoginForm;

