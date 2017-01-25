export default function profileReducer(state = {}, action) {
    switch(action.type) {
        case "GET_PROFILE_BY_ID": {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}