import { combineReducers } from 'redux';
import fakeUsers from './fake-users';
import fakeVideos from './fake-videos';


const allReducers = combineReducers({
    users: fakeUsers,
    videos: fakeVideos
});

export default allReducers;