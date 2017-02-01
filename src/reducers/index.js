import { combineReducers } from 'redux';
import fakeUsers from './fake-users';
import fakeVideos from './fake-videos';
import dates from './dates'
import videoDetailsReducer from './videoDetailsReducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import editProfileReducer from './edit-profile-reducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import categoryReducer from './categoryReducer';
import recentVideoReducer from './recentVideosReducer';
import mostPopularVideosReducer from './mostPopularReducer';
import getSubscriptionsReducer from './getSubscriptionsReducer';

const allReducers = combineReducers({
    users: fakeUsers,
    videos: fakeVideos,
    videoDetails: videoDetailsReducer,
    dates: dates,
    loginStatus: loginReducer,
    signUpStatus: signUpReducer,
    editProfile: editProfileReducer,
    searchResults: searchReducer,
    userProfile: profileReducer,
    allRecentVideos: recentVideoReducer,
    mostPopVideos: mostPopularVideosReducer,
    categoryVideos: categoryReducer,
    usersSubscriptions: getSubscriptionsReducer
});

export default allReducers;
