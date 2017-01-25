import axios from 'axios';

module.exports = {
    getVideosByCategoryActions: ( selectedCategory ) => {
        return ( dispatch ) => {
            axios.post('/api/getvideosbycategory', {
                selectedCategory
            })
                .then( ( response ) => {
                    if( response.data.success ) {
                        dispatch({
                            type: "GET_VIDEOS_BY_CATEGORIES_SUCCESS",
                            payload: { categoriesVideoResponse: response }
                        })
                    } else {
                        dispatch({
                            type: "GET_VIDEOS_BY_CATEGORIES_FAILURE"
                        })
                    }
                })
        }}

};
