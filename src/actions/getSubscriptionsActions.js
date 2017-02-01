import axios from 'axios';

module.exports = {
    getSubscriptions: ( userid ) => {
        return ( dispatch ) => {
            axios.get( `/api/getsubscriptions/${userid}` )
                .then( ( response ) => {
                    if( response.status === 200 ) {
                        dispatch({
                            type: "GET_SUBSCRIPTIONS_SUCCESS",
                            payload: { usersSubscriptions: response.data }
                        })
                    } else {
                        dispatch({
                            type: "GET_SUBSCRIPTIONS_FAILURE"
                        })
                    }
                })
        }
    }
};