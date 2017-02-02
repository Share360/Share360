export default function getSubscriptionsReducer( state = { usersSubscriptions: [] }, action ) {
    switch( action.type ) {
        case "GET_SUBSCRIPTIONS_SUCCESS": {
            return Object.assign({}, state, action.payload)
        }
        case "GET_SUBSCRIPTIONS_FAILURE": {
            return Object.assign({}, state)
        }
        default: {
            return state;
        }
    }
};