import axios from 'axios';

module.exports = {
    mostPopularActions: () => {
      return ( dispatch ) => {
          axios.get('/api/mostpopularvideos')
              .then( ( response ) => {
                  if( response.status === 200 ) {
                      dispatch({
                          type: "GET_VIDEOS_BY_MOST_LIKES_SUCCESS",
                          payload: { mostPopVideos: response.data }
                      })
                  } else {
                      dispatch({
                          type: "GET_VIDEOS_BY_MOST_LIKES_FAILURE"
                      })
                  }
              })
      }
  }
};
