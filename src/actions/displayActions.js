export const displayVideos = (videos) => {
    console.log("videos to be displayed :" + videos);
    return {
        type: "DISPLAY_VIDEOS",
        payload: videos
    }
};