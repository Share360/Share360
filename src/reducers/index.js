import { combineReducers } from 'redux';
import fakeUsers from './fake-users';
import fakeVideos from './fake-videos';
import dates from './dates'


const allReducers = combineReducers({
    users: fakeUsers,
    videos: fakeVideos,
    dates: dates
});

export default allReducers;