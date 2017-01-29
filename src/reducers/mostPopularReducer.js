
export default function mostPopularVideosReducer( state = { mostPopularVideosReducer: {} } , action ) {
    switch( action.type ) {
        case "GET_VIDEOS_BY_MOST_LIKES_SUCCESS": {
            return Object.assign({}, state, { mostPopularVideosReducer: action.payload })
        }
        case "GET_VIDEOS_BY_MOST_LIKES_FAILURE": {
            return Object.assign({}, state )
        }
        default: {
            return state
        }
    }

}