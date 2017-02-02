SELECT public."Videos".*, public."Users".username FROM public."Favorites"
JOIN public."Videos" on video_id = public."Videos".id
JOIN public."Users" on public."Videos".uploader_id = public."Users".id
WHERE public."Favorites".user_id = $1;