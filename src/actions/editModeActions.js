export const toggleEdit = (e, user) => {
    console.log("Edit Mode Clicked");
    return {
        type: "EDIT_MODE",
        payload: user
    }
};

export const toggleProfile = (e, user) => {
    "use strict";
    console.log("Profile Mode Clicked");
    return {
        type: "PROFILE_MODE",
        payload: user
    }
};