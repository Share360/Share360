import axios from 'axios';

module.exports = {
    getProfileById: (id) => {
        return function (dispatch) {
            axios.get('/api/getProfile/' + id).then((res) => {
                dispatch({
                    type: "GET_PROFILE_BY_ID",
                    payload: res.data[0]
                });
            });
        }
    }
}