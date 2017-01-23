SELECT * FROM public."Favorites"
JOIN public."Videos" on video_id = public."Videos".id
WHERE user_id = $1;