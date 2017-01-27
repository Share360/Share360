
export default function mostPopularVideosReducer( state = { mostPopVideos: [] } , action ){
    switch( action.type ) {
        case "GET_VIDEOS_BY_MOST_LIKES_SUCCESS": {
            return Object.assign( {}, state, { mostPopVideos: action.payload.mostPopVideos })
        }
        case "GET_VIDEOS_BY_MOST_LIKES_FAILURE": {
            return Object.assign( {}, state )
        }
        default: {
            return state
        }
    }

}