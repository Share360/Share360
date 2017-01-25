import axios from 'axios';

module.exports = {
    getVideosByCategoryActions: ( selectedCategory ) => {
        return ( dispatch ) => {
            axios.post('/api/getvideosbycategory', {
                selectedCategory
            })
                .then( ( response ) => {
                    console.log(response);
                    if( response.status === 200 ) {
                        dispatch({
                            type: "GET_VIDEOS_BY_CATEGORIES_SUCCESS",
                            payload: { categoriesVideoResponse: response.data }
                        })
                    } else {
                        dispatch({
                            type: "GET_VIDEOS_BY_CATEGORIES_FAILURE"
                        })
                    }
                })
        }}

};
