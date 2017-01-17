import React, { Component } from 'react';
import { Link } from 'react-router';

class SignUp extends Component {
    dateDayDisplay() {
        var tempHTML;
        for(let i =0;i < 31; i++  ){
            tempHTML +=  <option key={i}>i</option>;
        }
        return tempHTML;
    }

    render() {
        return (
            <div className="container-fluid content login-wrapper">
                <div className="login-container col-xs-6  col-sm-6  col-md-4  col-lg-4  vcenter">
                    <form className="form-signin">
                        <h2 className="form-signin-heading ">Create an account here!</h2>
                        <input type="text" className="form-control login-input" name="fname" placeholder="firstname" required="" />
                        <input type="text" className="form-control login-input" name="lname" placeholder="lastname" required=""/>
                        <input type="text" className="form-control login-input" name="email" placeholder="email" required=""/>
                        <input type="text" className="form-control login-input" name="username" placeholder="username" required=""/>
                        <input type="text" className="form-control login-input" name="password" placeholder="password" required=""/>
                        <input type="text" className="form-control login-input" name="passwordConfirm" placeholder="confirm password" required=""/>
                        <select class="selectpicker">
                            { this.dateDayDisplay() }

                            </select>


                        <button className="btn btn-lg btn-custom btn-block" type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;