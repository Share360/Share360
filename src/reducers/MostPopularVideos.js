
export default function mostPopularVideos( state = {} , action ){
    switch( action.type ) {
        case "GET_VIDEOS_BY_MOST_LIKES_SUCCESS": {
            return Object.assign( {}, state, { mostPopularVideos: action.payload.mostPopVideos })
        }
        case "GET_VIDEOS_BY_MOST_LIKES_FAILURE": {
            return Object.assign( {}, state )
        }
    }
}