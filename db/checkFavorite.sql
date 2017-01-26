SELECT COUNT(*) AS num_occurences FROM public."Favorites"
WHERE user_id=$2
AND video_id=$1;