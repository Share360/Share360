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
	},
	addFavorite: (videoID, userID) => {
		return function(dispatch) {
			axios.post('/api/addfavorite', { videoID, userID }).then((res) => {
				dispatch({
					type: "ADD_FAVORITE",
				});
			});
		}
	},
	removeFavorite: (videoID, userID) => {
		return function(dispatch) {
			axios.delete(`/api/removefavorite?videoid=${videoID}&userid=${userID}`).then((res) => {
				dispatch({
					type: "REMOVE_FAVORITE",
				});
			});
		}
	},
	checkFavorite: (videoID, userID) => {
		return function(dispatch) {
			console.log('checking favorite');
			axios.get(`/api/checkfavorite?videoid=${videoID}&userid=${userID}`).then((res) => {
				console.log(res);
				if (Number(res.data[0].num_occurences) === 0) {
					dispatch({
						type: "SET_FAVORITE",
						payload: false
					});
				} else if (Number(res.data[0].num_occurences) > 0) {
					dispatch({
						type: "SET_FAVORITE",
						payload: true
					});
				}
			});
		}
	},
	getRecentVideos: (videos) => {
			return (dispatch) => {
				axios.get('/api/getRecentVideos', {
					videos
				}).then((res) => {
					dispatch({
						type: "GET_VIDEOS_LIST",
						payload: { allVideosResponse: res.data }
					});
				});
			}
	}
};
