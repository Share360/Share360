import axios from 'axios';

module.exports = {
  getVideosByLikesActions: () => {
      return ( dispatch ) => {
          axios.get('/api/getvideosbymostlikes')
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
