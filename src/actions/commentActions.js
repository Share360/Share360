import axios from 'axios';

module.exports = {
	getComments: (id) => {
		return function(dispatch) {
			axios.get('/api/getcomments/' + id).then((res) => {
				dispatch({
					type: "GET_COMMENTS",
					payload: res.data[0]
				});
			});
		}
	},
	addComment: (userID, commentText, videoID) => {
		return function(dispatch) {
			axios.post('/api/addcomment', { userID, commentText, videoID }).then((res) => {
				dispatch({
					type: "ADD_COMMENT",
				});
			});
		}
	},
	deleteComment: () => {
		// TODO
	},
	editComment: () => {
		// TODO
	}
};
