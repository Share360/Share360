
export default function loginReducer( state = { signedUp : false }, action ) {
    switch( action.type ) {
        case "SIGNUP_FAILURE": {
            return Object.assign( {}, state, { signedUp: false } );
        }
        case "SIGNUP_SUCCESS": {
            return Object.assign( {}, state, { signedUp : true } );
        }
        default: {
            return state;
        }
    }
}