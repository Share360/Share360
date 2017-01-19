import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SignUp extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
            isLoading: false,
            errors: {}

        };
        this.onChange = this.onChange.bind(this);

    }

    onChange(e){
        this.setState({ [ e.target.name ] : e.target.value });
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.fname);
        // axios.post('/api', { user: this.state})
    }


    dayDisplay() {
        return this.props.dates.days.map( (date, i) => {
            return (
                <option key={ i } value={ date }>{ date }</option>
            )
        })
    }
    monthDisplay() {
        return this.props.dates.months.map( (date, i) => {
            return (
                <option key={ i } value={ date }>{ date }</option>
            )
        })
    }
    yearDisplay() {
        return this.props.dates.years.map( (date, i) => {
            return (
                <option key={ i } value={ date }>{ date }</option>
            )
        })
    }


    render() {

        const { fname, lname, email, username, passowrd, passwordConfirm, isLoading, errors} = this.state;

        return (
            <div className="container-fluid content login-wrapper">
                <div className="login-container col-xs-6  col-sm-6  col-md-4  col-lg-4  vcenter">
                    <form className="form-signin" onSubmit={ this.onSubmit }>
                        <h2 className="form-signin-heading ">Create an account here!</h2>
                        <textFieldGroup className="form-group">
                            <input type="text"
                                   value={ this.state.fname}
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="fname"
                                   placeholder="First Name"
                                   required="" />

                        </textFieldGroup>
                        <div className="form-group">
                            <input type="text"
                                   value={ this.state.lname }
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="lname"
                                   placeholder="Last Name"
                                   required=""/>

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   value={ this.state.email }
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="email"
                                   placeholder="email"
                                   required=""/>

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   value={ this.state.username }
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="username"
                                   placeholder="username"
                                   required=""/>

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   value={ this.state.password }
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="password"
                                   placeholder="password"
                                   required=""/>

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   value={ this.state.passwordConfirm }
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="passwordConfirm"
                                   placeholder="confirm password"
                                   required=""/>

                        </div>
                        <select className="selectpicker">
                            { this.dayDisplay() }
                        </select>
                        <select className="selectpicker">
                            { this.monthDisplay() }
                        </select>
                        <select className="selectpicker">
                            { this.yearDisplay() }
                        </select>


                        <button className="btn btn-lg btn-custom btn-block" type="submit" disabled={isLoading}>Create Account</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        dates: state.dates

    }
}

export default connect(mapStateToProps)(SignUp)