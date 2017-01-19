SELECT public."Videos".*, public."Users".username FROM public."Videos"
JOIN public."Users" ON uploader_id = public."Users".id
WHERE public."Videos".id = $1;
