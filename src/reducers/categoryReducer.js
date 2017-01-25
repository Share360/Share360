
export default function categoryReducer( state = { videos: [] }, action ) {
    switch( action.type ) {
        case "GET_VIDEOS_BY_CATEGORIES_FAILURE": {
            console.log('something happend in get videos by categories failure');
            return Object.assign( {}, state, { categoriesFailedResponseReducer: "I\'m sorry, there are no videos available in that category" } )
        }
        case "GET_VIDEOS_BY_CATEGORIES_SUCCESS": {
            console.log('something happend in get videos by categories success');

            return Object.assign( {}, state, { videos : action.payload.categoriesVideoResponse } )
        }
        default: {
            return state;
        }
    }
}

