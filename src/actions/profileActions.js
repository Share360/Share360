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
    },
    getVideoByUser: (id) => {
        return function (dispatch) {
            axios.get('/api/getuservideos/' + id).then((res) => {
                dispatch({
                    type: "GET_VIDEO_BY_USER",
                    payload: res.data
                })
            })
        };
    },
    deleteUserVideo: (videoID, userID) => {
        return function (dispatch) {
            axios.delete(`/api/deleteuservideo?id=${videoID}&uploader_id=${userID}`).then((res) => {
                dispatch({
                    type: "REMOVE_VIDEO"
                });
                axios.get('/api/getuservideos/' + id).then((res) => {
                    dispatch({
                        type: "GET_VIDEO_BY_USER",
                        payload: res.data
                    })
                })
            });
        }
    },
    subscribe: (uploaderID, userID) => {
        return function(dispatch) {
            axios.post('/api/subscribe', { uploaderID, userID }).then((res) => {
                dispatch({
                    type: "SUBSCRIBE",
                });
            });
        }
    }
}