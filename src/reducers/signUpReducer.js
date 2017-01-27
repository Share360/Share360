
export default function loginReducer( state = { signedUp : false, usernameAlreadyExists: false }, action ) {
    switch( action.type ) {
        case "SIGNUP_FAILURE": {
            return Object.assign( {}, state, { signedUp: false, usernameAlreadyExists: true } );
        }
        case "SIGNUP_SUCCESS": {
            return Object.assign( {}, state, { signedUp : true , usernameAlreadyExists: false } );
        }
        default: {
            return state;
        }
    }
}