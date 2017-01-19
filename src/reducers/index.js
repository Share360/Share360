import { combineReducers } from 'redux';
import fakeUsers from './fake-users';
import fakeVideos from './fake-videos';
import videoDetailsReducer from './videoDetailsReducer';


const allReducers = combineReducers({
    users: fakeUsers,
    videos: fakeVideos,
    videoDetails: videoDetailsReducer,
});

export default allReducers;