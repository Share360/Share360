export default function recentVideoReducer(state={ videos: [] }, action) {
    switch(action.type) {
        case "GET_VIDEOS_LIST": {
            return Object.assign({}, state, { videos : action.payload.allVideosResponse});
        }
        default: {
            return state;
        }
    }
}
