SELECT public."Videos".*, public."Users".username FROM public."Videos"
JOIN public."Users" ON uploader_id = public."Users".id
WHERE cat1 = $1 OR cat2 = $1 OR cat3 = $1;
