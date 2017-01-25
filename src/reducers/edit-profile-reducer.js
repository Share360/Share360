export default function editProfileReducer( state = { editMode : false }, action ) {
    switch( action.type ) {
        case "PROFILE_MODE": {
            return Object.assign( {}, state, { editMode : false } );
        }
        case "EDIT_MODE": {
            return Object.assign( {}, state, { editMode : true } );
        }
        default: {
            return state;
        }
    }
}