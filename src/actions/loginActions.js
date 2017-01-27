import axios from 'axios';

module.exports = {
    login: (username, password) => {
        return function(dispatch) {
            axios.post('/api/login', {
                username,
                password
            })
                .then((response) => {
                    if(response.data.success ) {
                        window.location = '/#/';
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: { username: response.data.user, id: response.data.id }
                        })
                    } else {
                        dispatch({
                            type: "LOGIN_FAILURE"
                        })

                    }
            })
        }
    },
    logout: () => {
        return (dispatch) => {
            axios.get('/api/logout').then((res) => {
                if(res.data === true) {
                    dispatch({
                        type: "LOGOUT_SUCCESS"
                    });
                    window.location = "/#/";
                }
            });
        }
    },
    checkLoginStatus: () => {
        return (dispatch) => {
            axios.get('/api/checklogin').then((response) => {
                dispatch({
                    type: "SET_LOGIN_STATUS",
                    payload: response.data
                });
            });
        }
    }
};