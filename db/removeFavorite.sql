DELETE FROM Public."Favorites"
WHERE user_id=$1
AND video_id=$2;