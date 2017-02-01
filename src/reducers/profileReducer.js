export default function profileReducer(state = {}, action) {
    switch(action.type) {
        case "GET_PROFILE_BY_ID": {
            return Object.assign({}, state, action.payload);
        }
        case "GET_VIDEO_BY_USER": {
            return Object.assign({}, state, { userVideos: action.payload, videoDeleted : false });
        }
        case "REMOVE_VIDEO": {
            return Object.assign({}, state, { videoDeleted : true })
        }
        default: {
            return state;
        }
    }
}