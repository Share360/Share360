export default function searchReducer(state = {}, action) {
	switch(action.type) {
		case "GET_SEARCH_RESULTS": {
			return Object.assign({}, state, {results: action.payload});
		}
		case "GET_FAVORITES": {
			return Object.assign({}, state, {favorites: action.payload});
		}
		default: {
			return state;
		}
	}
}