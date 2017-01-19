import axios from 'axios';

module.exports = {
	getVideoById: (id) => {
		return function(dispatch) {
			axios.get('/api/getvideobyid/' + id).then((res) => {
				dispatch({
					type: "GET_VIDEO_BY_ID",
					payload: res.data[0]
				});
			});
		}
	}
}