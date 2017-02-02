SELECT *, public."Comments".id AS comment_id FROM public."Comments"
JOIN public."Users" on user_id = public."Users".id
WHERE video_id = $1
ORDER BY public."Comments".id DESC;