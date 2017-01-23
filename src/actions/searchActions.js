import axios from 'axios';

module.exports = {
	getSearchResults: (searchTerm) => {
		return function(dispatch) {
			axios.get('/api/search/' + searchTerm).then((res) => {
				dispatch({
					type: "GET_SEARCH_RESULTS",
					payload: res.data
				});
			});
		}
	},
	getFavorites: (userID) => {
		return function(dispatch) {
			axios.get('/api/getfavorites/' + userID).then((res) => {
				dispatch({
					type: "GET_FAVORITES",
					payload: res.data
				});
			});
		}
	}
}