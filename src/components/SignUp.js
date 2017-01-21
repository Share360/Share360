import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import signUpActions from '../actions/signUpActions';



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
            day: 0,
            month: 0,
            year: 0,
            isLoading: false,
            errors: {}

        };

        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange( e ){
        this.setState({ [ e.target.name ] : e.target.value.toLowerCase() });
    }

    onChangeDay( e ){
        this.setState({ day : e.target.value });
    }

    onChangeMonth( e ){
        this.setState({ month : e.target.value });
    }

    onChangeYear( e ){
        this.setState({ year : e.target.value });
    }

    onSubmit( e ){
        e.preventDefault();

        if (this.state.password === this.state.passwordConfirm) {

            this.props.dispatch( signUpActions.signUp ( this.state.fname, this.state.lname, this.state.email, this.state.username, this.state.password, this.state.day, this.state.month, this.state.year ) );
        } else {
            alert("sorry, your passwords don't match, try again!");
        }
    }


    dayDisplay() {
        return this.props.dates.days.map( (date, i) => {
            return (
                <option key={ i } name="day" value={ date }>{ date }</option>
            )
        })
    }

    monthDisplay() {
        return this.props.dates.months.map( (date, i) => {
            return (
                <option key={ i }  name="month" value={ i  }>{ date }</option>
            )
        })
    }

    yearDisplay() {
        return this.props.dates.years.map( (date, i) => {
            return (
                <option key={ i } name="year" value={ date }>{ date }</option>
            )
        })
    }


    render() {

        return (
            <div className="container-fluid content login-wrapper">
                <div className="login-container col-xs-6  col-sm-6  col-md-4  col-lg-4  vcenter">
                    <form className="form-signin" onSubmit={ this.onSubmit }>
                        <h2 className="form-signin-heading ">Create an account here!</h2>
                        <textFieldGroup className="form-group">
                            <input type="text"
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="fname"
                                   placeholder="First Name"
                                   required
                            />

                        </textFieldGroup>
                        <div className="form-group">
                            <input type="text"
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="lname"
                                   placeholder="Last Name"
                                   required
                            />

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="email"
                                   placeholder="email"
                                   required
                            />

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="username"
                                   placeholder="username"
                                   required
                            />

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="password"
                                   placeholder="password"
                                   required
                            />

                        </div>
                        <div className="form-group">
                            <input type="text"
                                   onChange={ this.onChange }
                                   className="form-control login-input"
                                   name="passwordConfirm"
                                   placeholder="confirm password"
                                   required
                            />

                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="inputName" className="control-label col-xs-12 col-md-12 col-lg-12">Birthday</label>
                                <select className="form-control input-xs col-sm-4 col-md-4 col-lg-4" onChange={ this.onChangeDay } required>
                                    { this.dayDisplay() }
                                </select>
                                <select className="form-control" onChange={ this.onChangeMonth }  required>
                                    { this.monthDisplay() }
                                </select>
                                <select className="form-control" onChange={ this.onChangeYear } required>
                                    { this.yearDisplay() }
                                </select>
                            </div>
                        </div>



                        <button className="btn btn-lg btn-custom btn-block" type="submit" disabled={this.state.isLoading}>Create Account</button>
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