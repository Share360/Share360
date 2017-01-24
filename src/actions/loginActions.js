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
}