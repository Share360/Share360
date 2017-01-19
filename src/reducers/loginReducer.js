

export default function loginReducer( state = { loggedIn : false }, action ) {
    switch( action.type ) {
        case "LOGIN_FAILURE": {
            return Object.assign( {}, state, { loggedIn: false } );
        }
        case "LOGIN_SUCCESS": {
            return Object.assign( {}, state, { loggedIn : true , username: action.payload.username, id: action.payload.id } );
        }
        default: {
            return state;
        }
    }
}