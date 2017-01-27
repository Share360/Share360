

export default function loginReducer( state = { loggedIn : false }, action ) {
    switch( action.type ) {
        case "LOGIN_FAILURE": {
            return Object.assign( {}, state, { loggedIn: false } );
        }
        case "LOGIN_SUCCESS": {
            return Object.assign( {}, state, { loggedIn : true , username: action.payload.username, id: action.payload.id } );
        }
        case "SET_LOGIN_STATUS": {
            return Object.assign( {}, state, action.payload) ;
        }
        case "LOGOUT_SUCCESS": {
            return Object.assign( {}, { loggedIn: false } );
        }
        default: {
            return state;
        }
    }
}