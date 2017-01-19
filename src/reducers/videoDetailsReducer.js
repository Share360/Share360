export default function videoDetailsReducer(state = {}, action) {
	switch(action.type) {
		case "GET_VIDEO_BY_ID": {
			return Object.assign({}, state, action.payload);
		}
		default: {
			return state;
		}
	}
}