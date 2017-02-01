import axios from 'axios';

module.exports = {
  signUp: ( fname, lname, email, username, password, day, month, year ) => {
    return function ( dispatch ) {
        axios.post( '/api/signup', {
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password,
            birthday: new Date(year, month, day)
        })
            .then( (response ) => {
                if( response.data === "SUCCESS") {
                    window.location = '/#/login';
                    dispatch({
                        type: "SIGNUP_SUCCESS"
                    })
                } else if ( response.data === "FAILURE" ) {
                    dispatch({
                        type: "SIGNUP_FAILURE"
                    })
                }
            })
    }
  }
};